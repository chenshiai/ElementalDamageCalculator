<template>
  <textarea name="playinfo" id="playinfo" v-model="value"></textarea>
  <br />
  <button @click="executeAllActions">清空粘贴复制</button>
  <div>{{ fmt }}</div>
  <div v-if="actionSuccess" class="action-success">操作已完成</div>
  <br />
  <textarea name="playinfo" id="playinfo" v-model="value2"></textarea>
  <br />
  <button @click="pasteFmt2">粘贴</button>
  <div>{{ fmt2 }}</div>
  <button @click="copyFmt2(0)">复制A</button>
  <button @click="copyFmt2(1)">复制B</button>
  <br />
  <select v-model="mode">
    <option value="+">+</option>
    <option value="/">/</option>
  </select>
  <select v-model="mode2">
    <option value="0">100/100</option>
    <option value="1">100/1</option>
  </select>
</template>

<script setup>
import { ref, computed } from "vue";
const value = ref("");
const value2 = ref("");
const mode = ref("+");
const mode2 = ref("0");
const copySuccess = ref(false);

const fmt = computed(() => {
  try {
    // 1. 基本输入验证
    if (!value.value || typeof value.value !== "string") {
      return [];
    }

    // 2. 清理和规范化输入字符串
    const cleanedInput = value.value
      .replaceAll("\n", "") // 移除所有换行符
      .replaceAll(" ", "") // 移除所有空格
      .replaceAll('"', ""); // 移除所有双引号

    // 3. 按逗号分割字符串并处理每个元素
    return cleanedInput.split(",").map((item) => {
      // 跳过空元素
      if (!item.trim()) {
        return 0;
      }

      // 移除百分号并转换为数值
      // 使用正则表达式移除所有中文字符
      const numValue = Number(
        item.replace(/%|[\u4e00-\u9fa5]/g, "")
      );

      // 处理无效数字情况
      if (isNaN(numValue)) {
        return 0;
      }

      // 转换为小数并保留6位小数精度
      return Number((numValue / 100).toFixed(6));
    });
  } catch (error) {
    console.error("格式化输入时出错:", error);
    return [];
  }
});
const fmt2 = computed(() => {
  const a = [];
  const b = [];
  try {
    // 1. 基本输入验证
    if (!value2.value || typeof value2.value !== "string") {
      return [];
    }

    // 2. 清理和规范化输入字符串
    const cleanedInput = value2.value
      .replaceAll("\n", "") // 移除所有换行符
      .replaceAll(" ", "") // 移除所有空格
      .replaceAll('"', ""); // 移除所有双引号

    // 3. 按逗号分割字符串并处理每个元素

    cleanedInput.split(",").forEach((item) => {
      // 跳过空元素
      if (!item.trim()) {
        return 0;
      }
      a.push(
        Number(
          // 使用正则表达式移除所有中文字符
          (item
            .split(mode.value)[0]
            .replace(/%|[\u4e00-\u9fa5]/g, "") / 100
          ).toFixed(6)
        )
      );
      b.push(
        Number(
          // 使用正则表达式移除所有中文字符
          (item
            .split(mode.value)[1]
            .replace(/%|[\u4e00-\u9fa5]/g, "") / (mode2.value === "1" ? 1 : 100)
          ).toFixed(6)
        )
      );
    });
    return [a, b];
  } catch (error) {
    console.error("格式化输入时出错:", error);
    return [];
  }
});

const copyFmt = async () => {
  try {
    // 将数组转换为JSON字符串格式（保留数组结构）
    const fmtStr = JSON.stringify(fmt.value);
    // 使用现代的Clipboard API复制文本
    await navigator.clipboard.writeText(fmtStr);

    // 显示复制成功提示
    copySuccess.value = true;
    setTimeout(() => {
      copySuccess.value = false;
    }, 2000);
  } catch (err) {
    console.error("复制失败:", err);
    // 降级方案：使用传统的复制方法
    const textArea = document.createElement("textarea");
    textArea.value = JSON.stringify(fmt.value);
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      copySuccess.value = true;
      setTimeout(() => {
        copySuccess.value = false;
      }, 2000);
    } catch (fallbackErr) {
      console.error("降级复制方法也失败了:", fallbackErr);
    }
    document.body.removeChild(textArea);
  }
};
const copyFmt2 = async (mode) => {
  try {
    // 将数组转换为JSON字符串格式（保留数组结构）
    const fmtStr = JSON.stringify(fmt2.value[mode]);
    // 使用现代的Clipboard API复制文本
    await navigator.clipboard.writeText(fmtStr);

    // 显示复制成功提示
    copySuccess.value = true;
    setTimeout(() => {
      copySuccess.value = false;
    }, 2000);
  } catch (err) {
    console.error("复制失败:", err);
    // 降级方案：使用传统的复制方法
    const textArea = document.createElement("textarea");
    textArea.value = JSON.stringify(fmt.value);
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      copySuccess.value = true;
      setTimeout(() => {
        copySuccess.value = false;
      }, 2000);
    } catch (fallbackErr) {
      console.error("降级复制方法也失败了:", fallbackErr);
    }
    document.body.removeChild(textArea);
  }
};

// 保留原有功能，但通过新的统一函数调用
const clearFmt = () => {
  value.value = "";
};

// 创建一个统一的操作状态变量
const actionSuccess = ref(false);

// 一键执行清空、粘贴、复制三个操作的函数
const executeAllActions = async () => {
  try {
    // 1. 首先清空现有内容
    clearFmt();

    // 2. 然后执行粘贴操作
    // 先重置粘贴成功状态
    pasteSuccess.value = false;
    // 执行粘贴
    await pasteFmt();

    // 3. 最后执行复制操作
    // 先重置复制成功状态
    copySuccess.value = false;
    // 执行复制
    await copyFmt();

    // 4. 显示统一的操作成功提示
    actionSuccess.value = true;
    setTimeout(() => {
      actionSuccess.value = false;
    }, 2000);
  } catch (error) {
    console.error("执行操作时出错:", error);
    alert("操作执行失败，请重试");
  }
};

// 粘贴功能实现
const pasteSuccess = ref(false);
const pasteFmt = async () => {
  try {
    // 使用现代的Clipboard API读取剪贴板内容
    const text = await navigator.clipboard.readText();

    // 设置到value中
    value.value = text;

    // 显示粘贴成功提示
    pasteSuccess.value = true;
    setTimeout(() => {
      pasteSuccess.value = false;
    }, 2000);
  } catch (err) {
    console.error("粘贴失败:", err);

    // 降级方案：使用传统的粘贴方法（需要用户手动确认）
    try {
      const textArea = document.createElement("textarea");
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);

      // 选择textarea并触发粘贴操作
      textArea.focus();
      document.execCommand("paste");

      // 获取粘贴的内容
      value.value = textArea.value;

      // 显示粘贴成功提示
      pasteSuccess.value = true;
      setTimeout(() => {
        pasteSuccess.value = false;
      }, 2000);

      document.body.removeChild(textArea);
    } catch (fallbackErr) {
      console.error("降级粘贴方法也失败了:", fallbackErr);
      alert("粘贴失败，请手动粘贴内容");
    }
  }
};
const pasteFmt2 = async () => {
  try {
    // 使用现代的Clipboard API读取剪贴板内容
    const text = await navigator.clipboard.readText();

    // 设置到value中
    value2.value = text;

    // 显示粘贴成功提示
    pasteSuccess.value = true;
    setTimeout(() => {
      pasteSuccess.value = false;
    }, 2000);
  } catch (err) {
    console.error("粘贴失败:", err);

    // 降级方案：使用传统的粘贴方法（需要用户手动确认）
    try {
      const textArea = document.createElement("textarea");
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);

      // 选择textarea并触发粘贴操作
      textArea.focus();
      document.execCommand("paste");

      // 获取粘贴的内容
      value.value = textArea.value;

      // 显示粘贴成功提示
      pasteSuccess.value = true;
      setTimeout(() => {
        pasteSuccess.value = false;
      }, 2000);

      document.body.removeChild(textArea);
    } catch (fallbackErr) {
      console.error("降级粘贴方法也失败了:", fallbackErr);
      alert("粘贴失败，请手动粘贴内容");
    }
  }
};
</script>

<style scoped>
.copy-success,
.paste-success,
.action-success {
  margin-top: 10px;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 12px;
}

.copy-success {
  background-color: #f0f9ff;
  color: #1890ff;
  border-color: #91d5ff;
}

.paste-success {
  background-color: #f6ffed;
  color: #52c41a;
  border-color: #b7eb8f;
}

.action-success {
  background-color: #fff7e6;
  color: #fa8c16;
  border-color: #ffd591;
}
</style>

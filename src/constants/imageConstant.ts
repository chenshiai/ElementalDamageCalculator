// 将字符串转换为小驼峰命名的函数
const toCamelCase = (str: string): string => {
  const parts = str.split(/[-_]/);
  // 处理数组，将第一个部分保持原样，其余部分首字母大写
  const camelCaseParts = parts.map((part, index) => {
    if (index === 0) {
      return part.toLowerCase();
    }
    return part.charAt(0).toUpperCase() + part.slice(1);
  });
  // 将处理后的部分拼接成一个字符串
  return camelCaseParts.join('');
};

// 封装统一导入图片的函数
const importImages = () => {
  // 动态导入 assets 目录下的 svg 和 png 图片
  const imageModules = {
    ...import.meta.glob('@/assets/**/*.svg', { eager: true }),
    ...import.meta.glob('@/assets/**/*.png', { eager: true })
  };
  const images: Record<string, string> = {};

  for (const path in imageModules) {
    // 提取文件名，去除路径和扩展名
    const match = path.match(/\/([^/]+)\.(svg|png)$/);
    if (match) {
      const fileName = match[1];
      const camelCaseName = toCamelCase(fileName);
      images[camelCaseName] = (imageModules[path] as { default: string }).default;
    }
  }

  return images;
};

// 调用函数获取所有图片
const allImages = importImages();

export default allImages;
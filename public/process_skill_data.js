const fs = require('fs');

// 读取relic.json文件
try {
  const rawData = fs.readFileSync('skill.json', 'utf8');
  console.log('文件读取成功，大小:', rawData.length, '字符');
  
  // 检查文件是否为空
  if (!rawData.trim()) {
    console.error('文件内容为空');
    process.exit(1);
  }
  
  const skills = JSON.parse(rawData);
  console.log('JSON解析成功，技能数量:', skills.length);
  
  // 处理每个技能
  skills.forEach((skill, index) => {
    console.log(`\n=== 技能 ${index + 1}: ${skill.Name} ===`);
    
    // 检查Promote是否存在
    if (!skill.Promote) {
      console.log('没有Promote数据');
      return;
    }
    
    // 获取所有等级的Param数组
    const levelParams = [];
    for (let i = 0; i <= 14; i++) {
      if (skill.Promote[i] && skill.Promote[i].Param) {
        levelParams.push(skill.Promote[i].Param);
      }
    }
    
    console.log('有效等级数量:', levelParams.length);
    
    // 确定Param数组的最大长度
    if (levelParams.length === 0) {
      console.log('没有Param数据');
      return;
    }
    
    const maxParamLength = Math.max(...levelParams.map(params => params.length));
    console.log('Param最大长度:', maxParamLength);
    
    // 为每个Param位置创建一个数组，包含所有等级的数值
    for (let paramIndex = 0; paramIndex < maxParamLength; paramIndex++) {
      const paramArray = levelParams.map(params => params[paramIndex] || 0);
      console.log(`Param[${paramIndex}]: [${paramArray.join(', ')}]`);
    }
  });
} catch (error) {
  console.error('错误:', error.message);
  if (error instanceof SyntaxError && error.message.includes('JSON')) {
    console.error('JSON解析错误，请检查文件格式');
  }
}

//   src\data\ResultMap.js
// pattern은 대표 패턴 예시. 실제 응답은 가장 가까운 pattern으로 매칭됨.

const resultMap = [
    { type: "EADC", pattern: [0,1,1,0,0,1,0,1,0,0] },
    { type: "EADS", pattern: [0,1,1,0,0,1,1,1,0,0] },
    { type: "EANC", pattern: [0,1,0,0,0,0,0,1,0,0] },
    { type: "EANS", pattern: [0,1,0,0,0,0,1,1,0,0] },
    { type: "ERDC", pattern: [0,0,1,0,0,1,0,0,0,0] },
    { type: "ERDS", pattern: [0,0,1,0,0,1,1,0,0,0] },
    { type: "ERNC", pattern: [0,0,0,0,0,0,0,0,0,0] },
    { type: "ERNS", pattern: [0,0,0,0,0,0,1,0,0,0] },
    { type: "IADC", pattern: [0,1,1,1,0,1,0,1,1,0] },
    { type: "IADS", pattern: [0,1,1,1,0,1,1,1,1,0] },
    { type: "IANC", pattern: [0,1,0,1,0,0,0,1,1,0] },
    { type: "IANS", pattern: [0,1,0,1,0,0,1,1,1,0] },
    { type: "IRDC", pattern: [0,0,1,1,0,1,0,0,1,0] },
    { type: "IRDS", pattern: [0,0,1,1,0,1,1,0,1,0] },
    { type: "IRNC", pattern: [0,0,0,1,0,0,0,0,1,0] },
    { type: "IRNS", pattern: [0,0,0,1,0,0,1,0,1,0] },
  ];
  
  export default resultMap;
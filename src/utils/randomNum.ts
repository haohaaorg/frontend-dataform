/**
 * 生成指定区间的随机整数
 * @param min
 * @param max
 * @returns {number}
 */
export function randomNum(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min) + min);
  }
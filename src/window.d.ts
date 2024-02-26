/**
 * 用于环境变量 env.js
 *  @link https://zhuanlan.zhihu.com/p/364767359 */
declare global {
  interface Window {
    Cypress: Record<string, string>;
  }
}
export {};

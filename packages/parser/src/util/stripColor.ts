export default (str: string): string => str.replace(/\^(X.{6}|.)/g, "")

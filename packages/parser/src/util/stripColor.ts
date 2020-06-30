export default (string: string): string => string.replace(/\^(X.{6}|.)/g, "")

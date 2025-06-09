class StringUtils {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}

export default StringUtils;
module.exports = {
  limitText: function (string) {
    if (string.length > 300) {
      return string.substring(0, 300) + "...";
    }
    return string;
  },
  formatDate: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
};

module.exports = {
  limitText: function (string) {
    if (string.length > 500) {
      return string.substring(0, 500) + "...";
    }
    return string;
  },
  formatDate: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
};

const { Post } = require("../models");

const postData = [
  {
    title: "Lorem ipsum dolor sit amet",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales convallis velit, eu consectetur tortor tempus nec. Sed eget tortor id metus vehicula venenatis. Quisque convallis maximus aliquet. Nullam molestie, nisl fringilla volutpat bibendum, mauris leo pulvinar tellus, et volutpat dui tellus quis arcu. Quisque ultricies diam a suscipit finibus. Maecenas sed elit ante. Vivamus laoreet, quam a egestas suscipit, dui augue commodo purus, et varius massa nibh ac dui. Nunc faucibus vehicula dapibus. Nullam condimentum et mi nec semper. Mauris at varius ligula. Aliquam finibus metus porta, sagittis magna convallis, finibus tellus.\
      \
      Aliquam accumsan laoreet dolor sit amet dapibus. Ut pretium egestas neque, vehicula gravida quam scelerisque convallis. In hac habitasse platea dictumst. Etiam tempus sapien mauris, euismod cursus quam feugiat a. Duis et lectus eget odio interdum aliquam nec ac velit. Pellentesque non aliquam turpis. Fusce tortor risus, finibus ut pellentesque ac, mattis quis dolor. Morbi dictum mauris commodo tortor efficitur, a pharetra ligula aliquam. Quisque facilisis, leo at molestie tempor, est eros lacinia est, porta lacinia elit arcu ornare eros. Sed a placerat purus. Ut vitae ultricies enim, sit amet congue urna. Nullam elementum nunc enim, id hendrerit orci fringilla et. Nullam augue ex, sollicitudin in felis vulputate, commodo aliquet felis. Proin eget ex hendrerit eros fermentum scelerisque vel in metus.",
    user_id: 1,
  },
  {
    title: "Consectetur adipiscing elit Aliquam eget",
    post_content:
      "Phasellus sit amet leo quis odio facilisis lobortis. Cras massa augue, lobortis nec enim quis, convallis tempor lectus. Mauris vel cursus eros. Mauris pulvinar felis quis tellus bibendum, sed finibus odio commodo. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed volutpat dui quis velit tempus, sed tincidunt orci placerat. Praesent eu nisi risus. Nunc non metus nec leo molestie lacinia. Vestibulum nec aliquet orci, ut congue nunc. Proin sit amet orci a nulla dapibus tempus. Pellentesque vitae vulputate odio, nec fringilla turpis. Pellentesque placerat suscipit enim vitae consectetur. Aliquam vel aliquam diam.\
      \
      Vestibulum a ultrices nibh, et aliquam sapien. Sed et dui nibh. Nulla ac eleifend neque. Sed quis urna risus. Donec quis risus dui. Curabitur ultricies condimentum tempor. Etiam tempor sapien sed augue placerat ultrices. Duis ultricies ultrices nunc eget mattis. Proin a nunc blandit, venenatis felis ac, viverra turpis. Curabitur quis justo turpis. Aliquam interdum sem at diam hendrerit posuere.",
    user_id: 2,
  },
  {
    title: "Nisi eu libero tincidunt imperdiet",
    post_content:
      "Suspendisse pharetra turpis a orci tincidunt, vel dapibus lorem elementum. Aliquam semper, nisl quis lobortis viverra, libero augue convallis mi, sit amet vulputate nisi magna eget lacus. Donec tristique urna porttitor commodo tristique. Curabitur vestibulum, enim eget lobortis scelerisque, erat augue gravida metus, vel aliquet ipsum sem vel leo. Morbi posuere, metus eget porttitor lobortis, odio orci interdum quam, eget lacinia leo tortor vel enim. Vestibulum sed congue nunc, at imperdiet sem. Curabitur eu dictum massa. Ut sed faucibus quam. Suspendisse consequat ante in metus interdum, vitae malesuada sapien ornare. Proin nec leo felis.\
      \
      Pellentesque egestas in urna at hendrerit. Nulla id nulla diam. Aliquam cursus condimentum tincidunt. In et congue nunc. Nulla tincidunt laoreet diam, non vulputate est pharetra at. Donec sed tempus elit. Nam in sem justo. Quisque porta est est, elementum hendrerit lectus bibendum vel. Cras aliquam turpis sed dui porttitor dignissim. Phasellus ante tortor, eleifend id leo eget, consequat vestibulum mauris.",
    user_id: 3,
  },
  {
    title: "Eu at lacus Donec diam",
    post_content:
      "Aliquam quam eros, mollis porttitor finibus vitae, efficitur id sem. Maecenas at magna condimentum, rutrum nisi a, rhoncus ex. Fusce elementum diam quam, quis tempor libero semper accumsan. Praesent ac ante convallis, tincidunt risus non, laoreet leo. Maecenas ut rhoncus magna. Nullam lacinia ultrices ornare. Nam nec nisl placerat, pretium neque id, feugiat turpis. Vestibulum egestas feugiat urna in hendrerit. Pellentesque tincidunt turpis quis sodales ultricies. Nam et laoreet dui. Sed quis sem consequat ipsum iaculis convallis eu nec turpis. Morbi congue erat turpis, quis pharetra odio vehicula et. Nulla sed sapien vitae velit pulvinar euismod. Fusce finibus lectus ligula, feugiat sollicitudin magna rutrum in.\
      \
      Sed volutpat metus velit, ac eleifend leo porta sed. Sed at nunc vitae magna maximus mollis. Nam faucibus pellentesque turpis ac semper. Proin lobortis elit in nulla iaculis egestas. Suspendisse risus turpis, vulputate et ex at, dapibus eleifend mauris. Duis sit amet suscipit elit. Morbi tempor nec nisl sed porttitor. Fusce efficitur, erat quis maximus varius, nibh dolor interdum augue, sit amet euismod nunc augue vitae quam. Praesent vestibulum lectus id vehicula laoreet. Morbi condimentum eros vel metus eleifend tristique. Suspendisse eu cursus eros, nec sagittis sapien.",
    user_id: 4,
  },
  {
    title: "Nibh pulvinar nec bibendum quis",
    post_content:
      "Nullam aliquam tortor augue, ut posuere eros viverra quis. In tincidunt ligula id nibh tristique varius ac quis sem. Duis pretium mi nisl, vel luctus sapien pharetra non. In eleifend, turpis malesuada volutpat suscipit, lectus massa pretium enim, et ullamcorper augue ex et ligula. Ut commodo ante nec eleifend hendrerit. In hac habitasse platea dictumst. Integer maximus ac nisl a vestibulum. In interdum vestibulum massa congue convallis. Nunc eget venenatis odio, sed ultricies sem. Cras at orci tristique, semper justo id, lacinia sem. Maecenas nunc neque, egestas sed elementum et, semper eu quam. Nullam fringilla auctor neque non placerat. Sed commodo rhoncus convallis. Suspendisse elementum, metus quis volutpat ornare, risus urna semper nisi, luctus faucibus metus ipsum ac nisl.\
      \
      Morbi a ex augue. Mauris pulvinar mattis pulvinar. Aliquam ornare odio risus, quis tristique eros dapibus nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nisl magna, scelerisque in turpis a, porta convallis mauris. Duis velit nibh, lobortis et sollicitudin nec, suscipit sed odio. Ut scelerisque lobortis ex. Sed ultrices vulputate nibh, tincidunt tincidunt eros ullamcorper id. Donec a suscipit ipsum. Morbi dictum, ligula at mollis facilisis, ex ligula faucibus lectus, tempus efficitur diam sapien ac magna. Donec purus metus, ullamcorper quis nulla sit amet, tristique venenatis nunc. Donec turpis neque, blandit dignissim nulla eu, gravida mollis tellus. In sit amet porta nunc, id tincidunt leo.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

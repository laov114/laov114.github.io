const Hexo = require('hexo');
const hexo = new Hexo(process.cwd(), {});

hexo.init().then(() => {
  return hexo.load();
}).then(() => {
  const PostAsset = hexo.model('PostAsset');
  const assets = PostAsset.toArray();
  
  console.log('=== PostAsset 数据库内容 ===');
  console.log('总数:', assets.length);
  console.log('');
  
  assets.forEach(asset => {
    console.log('ID:', asset._id);
    console.log('Path:', asset.path);
    console.log('Post:', asset.post ? hexo.model('Post').findById(asset.post).title : 'N/A');
    console.log('---');
  });
  
  process.exit(0);
}).catch(err => {
  console.error('错误:', err);
  process.exit(1);
});

import ImageKit from '@imagekit/nodejs';

const client =new ImageKit({privateKey:"private_f6IjRdMbxEKy7WQylWS98qLwiTc="});

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});


export default imagekit
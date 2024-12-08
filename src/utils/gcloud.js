const { Bucket, Storage } = require('@google-cloud/storage');
const { Firestore } = require('@google-cloud/firestore');

const gcStorage = new Storage();
const gcBucket = new Bucket(gcStorage, 'submissionmlgc-nurfianqodar-bucket', {
	userProject: 'submissionmlgc-nurfianqodar',
});
const gcFirestore = new Firestore({});

module.exports = {
	gcBucket,
	gcFirestore,
};

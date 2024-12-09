const { Bucket, Storage } = require('@google-cloud/storage');
const { Firestore } = require('@google-cloud/firestore');

const gcStorage = new Storage();
const gcBucket = new Bucket(gcStorage, 'submissionmlgc-nurfianqodar-bucket', {
	userProject: 'submissionmlgc-nurfianqodar',
});
const gcFirestore = new Firestore({});

const downloadFromGCS = async (filePath, destination) => {
	try {
		await gcBucket.file(filePath).download({ destination });
		console.log(`success download ${filePath} to ${dest}`);
	} catch (err) {
		console.error(err);
	}
};

module.exports = {
	gcBucket,
	gcFirestore,
	downloadFromGCS,
};

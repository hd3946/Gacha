const basePath = process.cwd() + '/hashilip_engine';
import NETWORK from '../constants/network';
const fs = require('fs');
const { NFT_BUILD_PATH } = process.env;
const buildDir = `${NFT_BUILD_PATH}`;

const { network, solanaMetadata } = require(`${basePath}/src/config.ts`);

const updateConfig = async (cid, name, desc) => {
  try {
    let rawdata = await fs.readFileSync(`${buildDir}/json/_metadata.json`);
    let data = JSON.parse(rawdata);

    const baseUri = `ipfs://${cid}`;
    const namePrefix = name;
    const description = desc;

    console.log(namePrefix);

    data.forEach((item) => {
      if (network == NETWORK.sol) {
        item.name = `${namePrefix} #${item.edition}`;
        item.description = description;
        item.creators = solanaMetadata.creators;
      } else {
        item.name = `${namePrefix} #${item.edition}`;
        item.description = description;
        item.image = `${baseUri}/${item.edition}.png`;
      }
      fs.writeFileSync(
        `${buildDir}/json/${item.edition}.json`,
        JSON.stringify(item, null, 2),
      );
    });

    fs.writeFileSync(
      `${buildDir}/json/_metadata.json`,
      JSON.stringify(data, null, 2),
    );

    if (network == NETWORK.sol) {
      console.log('update_2');
      console.log(`Updated description for images to ===> ${description}`);
      console.log(`Updated name prefix for images to ===> ${namePrefix}`);
      console.log(
        `Updated creators for images to ===> ${JSON.stringify(
          solanaMetadata.creators,
        )}`,
      );
    } else {
      console.log(`Updated baseUri for images to ===> ${baseUri}`);
      console.log(`Updated description for images to ===> ${description}`);
      console.log(`Updated name prefix for images to ===> ${namePrefix}`);
    }

    return 'success';
  } catch (err) {
    return err;
  }
};

export { updateConfig };

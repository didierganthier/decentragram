import { createClient } from "urql";

const API_URL = 'https://api-mumbai.lens.dev/';

export const urqlClient = createClient({
    url: API_URL,
});

export const Profile = `
{
    "data": {
      "profile": {
        "id": "0x01",
        "name": "LensProtocol.eth 🌿",
        "bio": "A permissionless, composable, & decentralized social graph that makes building a Web3 social platform easy.",
        "attributes": [
          {
            "displayType": null,
            "traitType": "string",
            "key": "location",
            "value": "Developer Garden"
          },
          {
            "displayType": null,
            "traitType": "string",
            "key": "website",
            "value": "https://lens.dev/"
          },
          {
            "displayType": null,
            "traitType": "string",
            "key": "twitter",
            "value": "lensprotocol"
          },
          {
            "displayType": null,
            "traitType": "boolean",
            "key": "isBeta",
            "value": "true"
          },
          {
            "displayType": null,
            "traitType": "string",
            "key": "app",
            "value": "Lenster"
          }
        ],
        "followNftAddress": "0x5832bE646A8a7A1A7a7843efD6B8165aC06e360D",
        "metadata": "ipfs://QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
        "isDefault": false,
        "picture": {
          "original": {
            "url": "https://ipfs.infura.io/ipfs/QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX",
            "mimeType": null
          },
          "__typename": "MediaSet"
        },
        "handle": "lensprotocol.test",
        "coverPicture": {
          "original": {
            "url": "https://ipfs.infura.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS",
            "mimeType": null
          },
          "__typename": "MediaSet"
        },
        "ownedBy": "0x6C77a5a88C0AE712BAeABE12FeA81532060dcBf5",
        "dispatcher": null,
        "stats": {
          "totalFollowers": 2103,
          "totalFollowing": 0,
          "totalPosts": 2,
          "totalComments": 0,
          "totalMirrors": 0,
          "totalPublications": 2,
          "totalCollects": 1354
        },
        "followModule": null
      }
    }
  }
`
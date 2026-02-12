import * as ProductImages from '$lib/assets/ProductImages'
import { MakeMethod } from '$lib/assets/enums.js';
export const products = [
	{
		name: "Sample Product Single Design",
		description: "A sample description",
		mainimage: "https://picsum.photos/400/400",
		additionalimages: [],
		hasVariations: false,
		isSubscription: false,
		specifications: {
			height: "", length: "", width: "", weight: "", color: "", materials: ["100% cotton"], makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
		}
		},
	{
		name: "Sample Product with Variables",
		description: "A sample description",
		mainimage: "https://picsum.photos/400/400",
		additionalimages: [],
		hasVariations: true,
		isSubscription: false,
		specifications: {
			height: "", length: "", width: "", weight: "", color: "", materials: ["100% cotton"], makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
		},
		variations: [
			{
				height: "", length: "", width: "", weight: "", color: "", materials: ["100% Acrylic"], makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
			},
			{
				height: "", length: "", width: "", weight: "", color: "", materials: ["100% cotton"], makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
			}],
	},
	{
		name: "Sample Subscription",
		description: "A sample description",
		mainimage: "https://picsum.photos/400/400",
		additionalimages: [],
		hasVariations: true,
		isSubscription: true,
		specifications: {
			height: "", length: "", width: "", weight: "", color: "", materials: ["100% cotton"], makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
		},
		variations: [
			{
				price:"",
				height: "",
				length: "",
				width: "",
				weight: "",
				color: "",
				materials: ["100% Acrylic"], makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
		},
			{
				price:"",height: "", length: "", width: "", weight: "", color: "", materials: ["100% cotton"], makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
			},
		],
	},
	{
		name: "Heartwarming Handmades",
		description: "A sample description",
		mainimage: "https://picsum.photos/400/400",
		additionalimages: [],
		hasVariations: true,
		isSubscription: true,
		specifications: {
			price:"",
			height: "",
			length: "",
			width: "",
			weight: "",
			color: "",
			materials: ["100% cotton"],
			makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
		},
		variations: [
			{
				subtitle:"Knick Knacks",
				price:"$10", height: "", length: "", width: "", weight: "", color: "", materials: ["100% Acrylic"], makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
			},
			{
				price:"15", height: "", length: "", width: "", weight: "", color: "", materials: ["100% cotton"], makemethod:[MakeMethod[0],MakeMethod[1],MakeMethod[2],MakeMethod[3],MakeMethod[4],MakeMethod[5],MakeMethod[6],MakeMethod[7],MakeMethod[8], MakeMethod[9]	],
			},
		],
	}
]
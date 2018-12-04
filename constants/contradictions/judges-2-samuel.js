const judges = {
  book: "Judges",
  answers: [
    {
      bookVerses: "1:19",
      question: `Was God not able to drive out the inhabitants of the valley in Judges 1:19?`,
      allPassages: [
        {
          heading: ``,
          passages: [
            {
              passage: "",
              text: ``
            }
          ]
        }
      ]
    },
    {
      bookVerses: "21:10",
      question: `Was it wrong for the Israelites to kill the people of Gilead?`,
      allPassages: [
        {
          heading: ``,
          passages: [
            {
              passage: "",
              text: ``
            }
          ]
        }
      ]
    }
  ]
};

const samuel1 = {
  book: "1 Samuel",
  answers: [
    {
      bookVerses: "15:2-3",
      see: ["numbers", "31:15-18"]
    },
    {
      bookVerses: "16:19-23",
      question: `Did Saul know who David was?`,
      allPassages: [
        {
          heading: ``,
          passages: [
            {
              passage: "",
              text: ``
            }
          ]
        }
      ]
    },
    {
      bookVerses: "17:50",
      question: `Who killed Goliath, David or Elhanan?`,
      allPassages: [
        {
          heading: ``,
          passages: [
            {
              passage: "",
              text: ``
            }
          ]
        }
      ]
    },
    {
      bookVerses: "17:55-58",
      see: ["1 samuel", "16:19-23"]
    },
    {
      bookVerses: "31:4",
      question: `Who killed Saul, Saul or the Amalekite?`,
      allPassages: [
        {
          heading: ``,
          passages: [
            {
              passage: "",
              text: ``
            }
          ]
        }
      ]
    }
  ]
};

const samuel2 = {
  book: "2 Samuel",
  answers: [
    {
      bookVerses: "1:8-10",
      see: ["1 samuel", "31:4"]
    },
    {
      bookVerses: "6:23",
      question: `Did Michal have any children?`,
      allPassages: [
        {
          heading: ``,
          passages: [
            {
              passage: "",
              text: ``
            }
          ]
        }
      ]
    },
    {
      bookVerses: "8:4",
      question: `How many horsemen did David capture, 1,700 or 7,000?`,
      quickAnswer: `<p>This discrepancy is likely the result of a copyist error, where 1 Chronicles 18:4 is probably the correct number.</p>`,
      fullPost: "/answers/how-many-horsemen-did-david-capture",
      allPassages: [
        {
          heading: `1,700 horsemen`,
          passages: [
            {
              passage: "2 Samuel 8:4",
              text: `And David took from him <strong>1,700 horsemen</strong>, and 20,000 foot soldiers. And David hamstrung all the chariot horses but left enough for 100 chariots.`
            }
          ]
        },
        {
          heading: `7,000 horsemen`,
          passages: [
            {
              passage: "1 Chronicles 18:4",
              text: `And David took from him 1,000 chariots, <strong>7,000 horsemen</strong>, and 20,000 foot soldiers. And David hamstrung all the chariot horses, but left enough for 100 chariots.`
            }
          ]
        }
      ]
    },
    {
      bookVerses: "10:18",
      question: `How many charioteers were killed, 700 or 7,000?`,
      quickAnswer: `<p>This discrepancy is likely the result of a copyist error, where 1 Chronicles 19:8 (7,000) is probably the correct number.</p>`,
      fullPost: "/answers/how-many-charioteers-were-killed",
      allPassages: [
        {
          heading: `700 charioteers`,
          passages: [
            {
              passage: "2 Samuel 10:18",
              text: `And the Syrians fled before Israel, and David killed of the Syrians <strong>the men of 700 chariots</strong>, and 40,000 horsemen, and wounded Shobach the commander of their army, so that he died there.`
            }
          ]
        },
        {
          heading: `7000 charioteers`,
          passages: [
            {
              passage: "1 Chronicles 19:18",
              text: `And the Syrians fled before Israel, and David killed of the Syrians <strong>the men of 7,000 chariots</strong> and 40,000 foot soldiers, and put to death also Shophach the commander of their army.`
            }
          ]
        }
      ]
    },
    {
      bookVerses: "21:8",
      see: ["2 samuel", "6:23"]
    },
    {
      bookVerses: "21:19",
      see: ["1 samuel", "17:50"]
    },
    {
      bookVerses: "24:1",
      question: `Who incited David to number Israel, God or Satan?`,
      allPassages: [
        {
          heading: ``,
          passages: [
            {
              passage: "",
              text: ``
            }
          ]
        }
      ]
    },
    {
      bookVerses: "24:9",
      question: `How many fighting men were there in Israel and Judah?`,
      allPassages: [
        {
          heading: ``,
          passages: [
            {
              passage: "",
              text: ``
            }
          ]
        }
      ]
    },
    {
      bookVerses: "24:13",
      question: `How many years of famine were threatened to David, seven or three?`,
      allPassages: [
        {
          heading: ``,
          passages: [
            {
              passage: "",
              text: ``
            }
          ]
        }
      ]
    }
  ]
};

export { judges, samuel1, samuel2 };

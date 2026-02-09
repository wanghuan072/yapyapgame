export const wands = [
  // 星界魔杖
  {
    id: 1,
    name: "Astral Wand",
    subtitle: 'Space & Telekinesis',
    imageUrl: '/images/wands/wands-01.webp',
    imageAlt: 'Astral Wand',
    Spells: [
      {
        Spell: 'Astral Eyes',
        name: 'Astral Eyes',
        description: "You can now see through walls, allowing you to view nearby allies and enemies",
        tips: '',
        state: 'Spell',
        audio: {
          en: '/MP3/Astral Wand - Astral Eyes - en.wav',
          cn: '/MP3/Astral Wand - Astral Eyes - cn.wav',
          video: '',
        },
      },
      {
        Spell: 'Blink',
        name: 'Blink',
        description: "Teleport a short distance in front of you.",
        tips: '',
        state: 'Spell',
        audio: {
          en: '/MP3/Astral Wand - Blink - en.wav',
          cn: '/MP3/Astral Wand - Blink - cn.wav',
          video: '',
        },
      },
      {
        Spell: 'Swap',
        name: 'Swap',
        description: "Swap positions with a chosen target.",
        tips: '',
        state: 'Spell',
        audio: {
          en: '/MP3/Astral Wand - Swap - en.wav',
          cn: '/MP3/Astral Wand - Swap - cn.wav',
          video: '',
        },
      },
      {
        Spell: 'Offer',
        name: 'Offer',
        description: 'This is a secret Spell, not seen in the Spell list, but you can confirm it in the Grimoire after buying the wand and bringing it to the Grimoire. This Spell allows you to swap positions with a given player. You use the "Offer" to select someone, and then Trade to switch with them.',
        tips: 'This is a secret Spell, not seen in the Spell list, but you can confirm it in the Grimoire after buying the wand and bringing it to the Grimoire.',
        state: 'secret Spell',
        audio: {
          en: '/MP3/Astral Wand - Offer - en.wav',
          cn: '',
          video: '',
        },
      }
    ]
  },

  // 祝福魔杖
  {
    id: 2,
    name: "Blessed Wand",
    subtitle: 'Blessed Wand',
    imageUrl: '/images/wands/wands-02.webp',
    imageAlt: 'Blessed Wand',
    Spells: [
      {
        Spell: 'Corpus Anima',
        name: 'Corpus Anima',
        description: "Bring dead things back to life.",
        tips: '',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Custodia',
        name: 'Custodia',
        description: "Create a shield around the chosen target that you see in front of you, protecting them from incoming damage.",
        tips: '',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Lux Vita',
        name: 'Lux Vita',
        description: "Create a healing effect on the target that heals them over time.",
        tips: '',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Merci',
        name: 'Merci',
        description: "If you're near your allies, be able to provide a small amount of healing to them if they've taken damage. You'll also dash towards them!",
        tips: '',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
    ]
  },

  // 怪异魔杖
  {
    id: 3,
    name: "Grotesque Wand",
    subtitle: 'Grotesque Wand',
    imageUrl: '/images/wands/wands-03.webp',
    imageAlt: 'Grotesque Wand',
    Spells: [
      {
        Spell: 'Achoo!',
        name: 'Achoo!',
        description: "With your Spell, sneeze on an enemy and objects.",
        tips: '',
        state: 'Spell',
        audio: {
          en: '/MP3/Grotesque Wand - Achoo - en.wan',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Piss-Yuk',
        name: 'Piss-Yuk',
        description: "Your wand sends out a stream of piss, damaging enemies and objects that are in its way. If you're louder, the flow from the stream becomes stronger.",
        tips: "The 'Dub' part allows two streams to appear!",
        state: 'Spell',
        audio: {
          en: '/MP3/Grotesque Wand - Piss-Yuk - en.wan',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Fish-Yuk',
        name: 'Fish-Yuk',
        description: "Target the wand at an object and cause it to become a fish",
        tips: '',
        state: 'Spell',
        audio: {
          en: '/MP3/Grotesque Wand - Fish-Yuk - en.wan',
          cn: '',
          video: '',
        }
      },
    ]
  },

  // 火之魔杖
  {
    id: 4,
    name: "Wand of Fire",
    subtitle: 'Wand of Fire',
    imageUrl: '/images/wands/wands-04.webp',
    imageAlt: 'Wand of Fire',
    Spells: [
      {
        Spell: 'Ignis Tongue',
        name: 'Ignis Tongue',
        description: "The wand causes your tongue to release fire whenever you speak; talk to send out a stream of fire against enemies and objects near you.",
        tips: 'Lighting furniture on fire',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Ignis Boom',
        name: 'Ignis Boom',
        description: "With your wand, conjure a mine that appears on the ground that an enemy (you or an ally!) can stand on and cause to explode.",
        tips: 'Knocking back pursuing enemies.',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Ignis Legs',
        name: 'Ignis Legs',
        description: "The Spellcaster moves faster and leaves a short trail of fire behind them.",
        tips: 'Getting away from enemies, rushing to the escape.',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Ignis Balls',
        name: 'Ignis Balls',
        description: "This is a secret spell that you can learn from the Grimoire. You'll become a fireball, sending yourself forward, hitting enemies and objects.",
        tips: 'Lighting furniture on fire',
        state: 'Secret Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
    ]
  },

  // 幻象魔杖
  {
    id: 5,
    name: "Wand of Illusions",
    subtitle: 'Illusion Magic',
    imageUrl: '/images/wands/wands-05.webp',
    imageAlt: '"Wand of Illusions',
    Spells: [
      {
        Spell: 'Shrink Ana',
        name: 'Shrink Ana',
        description: "Shrinks the Spell's target.",
        tips: 'Shrink a target. Look down to shrink yourself.',
        state: 'Spell',
        audio: {
          en: '/MP3/Wand of Illusions - Shrink Ana - en.wav',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Float Oculus',
        name: 'Float Oculus',
        description: "Spellcaster's spirit leaves their body to look around.",
        tips: 'Scouting for enemies and hard-to-reach areas',
        state: 'Spell',
        audio: {
          en: '/MP3/Wand of Illusions - Float Oculus - en.wav',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Poof Me',
        name: 'Poof Me',
        description: "Turns the Spellcaster into an item.",
        tips: 'Good for hiding.',
        state: 'Spell',
        audio: {
          en: '/MP3/Wand of Illusions - Poof Me - en.wav',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Echo Me',
        name: 'Echo Me',
        description: "Creates a walking, talking version of the Spellcaster.",
        tips: 'Helps distract enemies.',
        state: 'Spell',
        audio: {
          en: '/MP3/Wand of Illusions - Echo Me - en.wav',
          cn: '',
          video: '',
        }
      },
    ]
  },

  // 次级奥数魔杖
  {
    id: 6,
    name: "Wand of Minor Arcanes",
    subtitle: 'Wand of Minor Arcanes',
    imageUrl: '/images/wands/wands-06.webp',
    imageAlt: '"Wand of Minor Arcanes',
    Spells: [
      {
        Spell: 'Lux Ana',
        name: 'Lux Ana',
        description: "Summons a bat that will help light your way.",
        tips: 'Lighting dark rooms and corridors.',
        state: 'Spell',
        audio: {
          en: '/MP3/Wand of Minor Arcanes - Lux Ana - en.wav',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Tele Port Ana',
        name: 'Tele Port Ana',
        description: "Teleports the player upward.",
        tips: 'Getting to hard-to-reach rooms, avoiding enemies.',
        state: 'Spell',
        audio: {
          en: '/MP3/Wand of Minor Arcanes - Tele Port Ana - en.wav',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Grab Ana',
        name: 'Grab Ana',
        description: "Grabs an object in range and yanks it backwards.",
        tips: 'Smashing heavier items, bringing things closer to you.',
        state: 'Spell',
        audio: {
          en: '/MP3/Wand of Minor Arcanes - Grab Ana - en.wav',
          cn: '',
          video: '',
        }
      },
    ]
  },

  // 念力魔杖
  {
    id: 7,
    name: "Wand of Telekinesis",
    subtitle: 'As its name implies, the Wand of Telekinesis helps move objects. This includes lifting heavier objects to throw them, tossing objects with great force, and even locking them in place.',
    imageUrl: '/images/wands/wands-07.webp',
    imageAlt: '"Wand of Telekinesis',
    Spells: [
      {
        Spell: 'Tele Float',
        name: 'Tele Float',
        description: "Creates an area in front of the spellcaster that moves objects.",
        tips: 'Lifting heavy objects, throwing objects off the map',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Tele Lock',
        name: 'Tele Lock',
        description: "Prevents an object from being moved.",
        tips: 'Freezing things in place.',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Tele Blast',
        name: 'Tele Blast',
        description: "Flings the objects in front of the player away.",
        tips: 'Breaking items, knocking back enemies.',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      {
        Spell: 'Float Nulla',
        name: 'Float Nulla',
        description: "Lifts the gravity on an object, allowing players to grab it and throw it in the air.",
        tips: 'Knocking items off the map.',
        state: 'Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        }
      },
      
    ]
  },

  // 风之魔杖
  {
    id: 8,
    name: "Wand of Winds",
    subtitle: 'Wind Magic',
    imageUrl: '/images/wands/wands-08.webp',
    imageAlt: 'Wand of Winds',
    Spells: [
      {
        Spell: 'Aero',
        name: 'Aero',
        description: 'Send forth a surge of wind energy, knocking things off tables, pushing enemies back, or moving things around ever so slightly.',
        tips: '',
        state: 'Spell',
        audio: {
          en: '/MP3/Wand of Winds - Aero - en.wav',
          cn: '',
          video: '',
        },
      },
      {
        Spell: 'Tempest',
        name: 'Tempest',
        description: "Send out a tornado in a small circle, picking up small and medium objects, knocking them around. It also works on enemies if they're light enough.",
        tips: '',
        state: 'Spell',
        audio: {
          en: '/MP3/Wand of Winds - Tempest - en.wav',
          cn: '',
          video: '',
        },
      },
      {
        Spell: 'Up Dog',
        name: 'Up Dog',
        description: "Create an upward wind column underneath you, allowing you to float in the air. You may want to use this to protect yourself from falling or to avoid enemies chasing you.",
        tips: '',
        state: 'secret Spell',
        audio: {
          en: '/MP3/Wand of Winds - Up Dog - en.wav',
          cn: '',
          video: '',
        },
      },
      {
        Spell: 'Dog, dog, dog!', 
        name: 'Dog, dog, dog',
        description: "This is a secret Spell you can learn from the Grimoire. After you use the Up Dog, you can say Dog up to three more times to continue the upward surge and remain floating.",
        tips: 'Sustainable floating in the air',
        state: 'secret Spell',
        audio: {
          en: '',
          cn: '',
          video: '',
        },
      }
    ]
  }
]

// systemSpells removed

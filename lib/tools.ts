export const tools: any[] = [
  {
    type: "function",
    function: {
      name: "transformObject",
      description: "Transforms an object in the scene (translate, rotate, scale).",
      parameters: {
        type: "object",
        properties: {
          componentId: {
            type: "string",
            description: "The ID of the component to transform.",
          },
          translation: {
            type: "array",
            items: {
              type: "number",
            },
            description: "The new position of the object as an array of 3 numbers [x, y, z].",
          },
          rotation: {
            type: "array",
            items: {
              type: "number",
            },
            description: "The new rotation of the object as an array of 3 numbers [x, y, z] in degrees.",
          },
          scale: {
            type: "array",
            items: {
              type: "number",
            },
            description: "The new scale of the object as an array of 3 numbers [x, y, z].",
          },
        },
        required: ["componentId"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "configureWater",
      description: "Configures the water in the scene.",
      parameters: {
        type: "object",
        properties: {
          componentId: {
            type: "string",
            description: "Optional: The ID of the water plane component to configure. If omitted, a new water plane may be created.",
          },
          shallow_color: {
            type: "array",
            items: {
              type: "number",
            },
            description: "The color of the water in shallow areas as an array of 3 numbers [r, g, b] with values between 0 and 1.",
          },
          medium_color: {
            type: "array",
            items: {
              type: "number",
            },
            description: "The color of the water in medium depth areas as an array of 3 numbers [r, g, b] with values between 0 and 1.",
          },
          deep_color: {
            type: "array",
            items: {
              type: "number",
            },
            description: "The color of the water in deep areas as an array of 3 numbers [r, g, b] with values between 0 and 1.",
          },
          ripple_amplitude_multiplier: {
            type: "number",
            description: "Multiplier for the player interaction ripple amplitude. Default is 1.5.",
          },
          ripple_freq: {
            type: "number",
            description: "Frequency of the player interaction ripples. Default is 0.25.",
          },
          ripple_speed: {
            type: "number",
            description: "Speed of the player interaction ripples. Default is 3.0.",
          },
          shoreline_foam_range: {
            type: "number",
            description: "Range of the shoreline foam. Default is 2.5.",
          },
          crest_foam_min: {
            type: "number",
            description: "Minimum steepness for wave crest foam. Default is 0.45.",
          },
          crest_foam_max: {
            type: "number",
            description: "Maximum steepness for wave crest foam. Default is 0.75.",
          },
          sparkle_intensity: {
            type: "number",
            description: "Intensity of the sparkles on the water surface. Default is 0.8.",
          },
          sparkle_threshold: {
            type: "number",
            description: "Threshold for sparkle generation. Default is 0.7.",
          },
          subsurface_multiplier: {
            type: "number",
            description: "Multiplier for the subsurface scattering effect. Default is 0.35.",
          },
          fresnel_power: {
            type: "number",
            description: "Power of the fresnel effect. Default is 2.5.",
          },
          fresnel_multiplier: {
            type: "number",
            description: "Multiplier for the fresnel effect. Default is 0.6.",
          },
          // Wave 1 parameters
          wave1_amplitude: {
            type: "number",
            description: "Amplitude (height) of the first wave. Controls how tall the wave is. Default is 1.5.",
          },
          wave1_frequency: {
            type: "number",
            description: "Frequency of the first wave. Controls how tightly packed the waves are. Default is 0.08.",
          },
          wave1_speed: {
            type: "number",
            description: "Speed of the first wave animation. Default is 0.8.",
          },
          wave1_steepness: {
            type: "number",
            description: "Steepness/sharpness of the first wave (Q parameter). Range 0-1, higher values create sharper crests. Default is 0.3.",
          },
          wave1_direction: {
            type: "array",
            items: {
              type: "number",
            },
            description: "Direction of the first wave as [x, z]. Will be normalized. Default is [1.0, 0.5].",
          },
          // Wave 2 parameters
          wave2_amplitude: {
            type: "number",
            description: "Amplitude (height) of the second wave. Default is 1.2.",
          },
          wave2_frequency: {
            type: "number",
            description: "Frequency of the second wave. Default is 0.09.",
          },
          wave2_speed: {
            type: "number",
            description: "Speed of the second wave animation. Default is 1.2.",
          },
          wave2_steepness: {
            type: "number",
            description: "Steepness/sharpness of the second wave (Q parameter). Default is 0.3.",
          },
          wave2_direction: {
            type: "array",
            items: {
              type: "number",
            },
            description: "Direction of the second wave as [x, z]. Default is [-0.7, 1.0].",
          },
          // Wave 3 parameters
          wave3_amplitude: {
            type: "number",
            description: "Amplitude (height) of the third wave. Default is 0.8.",
          },
          wave3_frequency: {
            type: "number",
            description: "Frequency of the third wave. Default is 0.12.",
          },
          wave3_speed: {
            type: "number",
            description: "Speed of the third wave animation. Default is 1.5.",
          },
          wave3_steepness: {
            type: "number",
            description: "Steepness/sharpness of the third wave (Q parameter). Default is 0.25.",
          },
          wave3_direction: {
            type: "array",
            items: {
              type: "number",
            },
            description: "Direction of the third wave as [x, z]. Default is [0.8, -0.6].",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "configureGrass",
      description: "Configures the procedural grass in the scene.",
      parameters: {
        type: "object",
        properties: {
          componentId: {
            type: "string",
            description: "Optional: The ID of the grass component to configure. If omitted, a new grass system may be created.",
          },
          wind_strength: {
            type: "number",
            description: "Strength of the wind effect. Default is 2.5.",
          },
          wind_speed: {
            type: "number",
            description: "Speed of the wind animation. Default is 0.3.",
          },
          blade_height: {
            type: "number",
            description: "Height of the grass blades. Default is 2.75.",
          },
          blade_width: {
            type: "number",
            description: "Width of the grass blades. Default is 0.03.",
          },
          blade_density: {
            type: "number",
            description: "Density of the grass blades (blades per grid cell). Default is 15.",
          },
          render_distance: {
            type: "number",
            description: "Distance at which grass stops rendering. Default is 150.0.",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "spawnPrimitive",
      description: "Spawns a basic geometric primitive in the scene.",
      parameters: {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["Cube", "Sphere"],
            description: "The type of primitive to spawn.",
          },
          position: {
            type: "array",
            items: {
              type: "number",
            },
            description: "The position of the primitive as [x, y, z].",
          },
          scale: {
            type: "array",
            items: {
              type: "number",
            },
            description: "The scale of the primitive as [x, y, z]. Default is [1, 1, 1].",
          },
        },
        required: ["type", "position"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "generateHeightmap",
      description: "Generates a new procedural heightmap landscape based on noise and features.",
      parameters: {
        type: "object",
        properties: {
          componentId: {
            type: "string",
            description: "Optional: The ID of the landscape component to configure. If omitted, a new landscape may be created.",
          },
          seed: {
            type: "number",
            description: "Random seed for the noise generator.",
          },
          scale: {
            type: "number",
            description: "Scale of the base noise. Default is 100.0.",
          },
          persistence: {
            type: "number",
            description: "Persistence of the noise octaves. Default is 0.5.",
          },
          lacunarity: {
            type: "number",
            description: "Lacunarity of the noise octaves. Default is 2.0.",
          },
          features: {
            type: "array",
            items: {
              type: "object",
              properties: {
                type: {
                  type: "string",
                  enum: ["Mountain", "Valley", "Plateau", "Ridge"],
                  description: "Type of terrain feature.",
                },
                center: {
                  type: "array",
                  items: { type: "number" },
                  description: "Center [x, y] normalized (0.0-1.0).",
                },
                radius: {
                  type: "number",
                  description: "Radius normalized (0.0-1.0).",
                },
                intensity: {
                  type: "number",
                  description: "Height multiplier.",
                },
                falloff: {
                  type: "string",
                  enum: ["Linear", "Smooth", "Gaussian"],
                  description: "Falloff type.",
                },
                flat_top: {
                  type: "number",
                  description: "Ratio of radius that is flat (0.0-1.0).",
                },
                transition: {
                  type: "number",
                  description: "Ratio of radius for smooth transition (0.0-1.0).",
                },
              },
              required: ["type", "center", "radius", "intensity", "falloff"],
            },
            description: "List of terrain features to add.",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "saveScript",
      description: "Saves a Rhai script to the project. Useful for creating custom behaviors, dialogues, or interactions.",
      parameters: {
        type: "object",
        properties: {
          filename: {
            type: "string",
            description: "The name of the file, ending in .rhai (e.g., 'npc_interaction.rhai').",
          },
          content: {
            type: "string",
            description: "The complete Rhai script content.",
          },
          componentId: {
            type: "string",
            description: "Optional: The ID of the component to attach this script to. If provided, the system will update the component's rhai_script_path.",
          },
        },
        required: ["filename", "content"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "configureSky",
      description: "Configures the procedural sky.",
      parameters: {
        type: "object",
        properties: {
          componentId: {
            type: "string",
            description: "Optional: The ID of the sky component to configure. If omitted, a new sky may be created.",
          },
          horizon_color: {
            type: "array",
            items: { type: "number" },
            description: "Color of the horizon [r, g, b].",
          },
          zenith_color: {
            type: "array",
            items: { type: "number" },
            description: "Color of the sky zenith [r, g, b].",
          },
          sun_direction: {
            type: "array",
            items: { type: "number" },
            description: "Direction of the sun [x, y, z].",
          },
          sun_color: {
            type: "array",
            items: { type: "number" },
            description: "Color of the sun [r, g, b].",
          },
          sun_intensity: {
            type: "number",
            description: "Intensity of the sun.",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "configureTrees",
      description: "Configures procedural trees.",
      parameters: {
        type: "object",
        properties: {
          componentId: {
            type: "string",
            description: "Optional: The ID of the tree component to configure. If omitted, a new tree system may be created.",
          },
          seed: {
            type: "number",
            description: "Random seed for tree generation.",
          },
          trunk_height: {
            type: "number",
            description: "Height of the tree trunk.",
          },
          trunk_radius: {
            type: "number",
            description: "Radius of the tree trunk.",
          },
          branch_levels: {
            type: "number",
            description: "Number of recursion levels for branches.",
          },
          foliage_radius: {
            type: "number",
            description: "Radius of the foliage clusters.",
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "spawnModel",
      description: "Spawns a 3D model from the asset library into the scene.",
      parameters: {
        type: "object",
        properties: {
          assetId: {
            type: "string",
            description: "The ID of the model asset to spawn (must exist in project assets).",
          },
          position: {
            type: "array",
            items: { type: "number" },
            description: "Position [x, y, z]. Default [0, 0, 0].",
          },
          rotation: {
            type: "array",
            items: { type: "number" },
            description: "Rotation [x, y, z] in degrees. Default [0, 0, 0].",
          },
          scale: {
            type: "array",
            items: { type: "number" },
            description: "Scale [x, y, z]. Default [1, 1, 1]. Keep scale at 1 unless explicitly requested by the user.",
          },
        },
        required: ["assetId"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "spawnPointLight",
      description: "Spawns a point light source in the scene.",
      parameters: {
        type: "object",
        properties: {
          position: {
            type: "array",
            items: { type: "number" },
            description: "Position [x, y, z].",
          },
          color: {
            type: "array",
            items: { type: "number" },
            description: "Color [r, g, b]. Default [1, 1, 1].",
          },
          intensity: {
            type: "number",
            description: "Light intensity. Default 1.0.",
          },
          radius: {
            type: "number",
            description: "Maximum range of the light. Default 200.0.",
          },
        },
        required: ["position"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "spawnCollectable",
      description: "Spawns a collectable item (weapon, armor, item) using a 3D model.",
      parameters: {
        type: "object",
        properties: {
          assetId: {
            type: "string",
            description: "The ID of the model asset to use.",
          },
          type: {
            type: "string",
            enum: ["Item", "MeleeWeapon", "RangedWeapon", "Armor"],
            description: "The type of collectable.",
          },
          position: {
            type: "array",
            items: { type: "number" },
            description: "Position [x, y, z]. Default [0, 0, 0].",
          },
          rotation: {
            type: "array",
            items: { type: "number" },
            description: "Rotation [x, y, z] in degrees. Default [0, 0, 0].",
          },
          scale: {
            type: "array",
            items: { type: "number" },
            description: "Scale [x, y, z]. Default [1, 1, 1].",
          },
        },
        required: ["assetId", "type"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "spawnNPC",
      description: "Spawns an NPC (Non-Player Character) with specific behavior.",
      parameters: {
        type: "object",
        properties: {
          assetId: {
            type: "string",
            description: "The ID of the model asset to use for the NPC.",
          },
          position: {
            type: "array",
            items: { type: "number" },
            description: "Position [x, y, z]. Default [0, 0, 0].",
          },
          rotation: {
            type: "array",
            items: { type: "number" },
            description: "Rotation [x, y, z] in degrees. Default [0, 0, 0].",
          },
          scale: {
            type: "array",
            items: { type: "number" },
            description: "Scale [x, y, z]. Default [1, 1, 1].",
          },
          aggressiveness: {
             type: "number",
             description: "Aggressiveness level (0.0 to 1.0). Default 0.5.",
          },
          combat_type: {
             type: "string",
             enum: ["Melee", "Ranged"],
             description: "Type of combat behavior. Default 'Melee'.",
          },
          wander_radius: {
             type: "number",
             description: "Radius within which the NPC wanders. Default 10.0.",
          },
           wander_speed: {
             type: "number",
             description: "Speed while wandering. Default 2.0.",
          },
           detection_radius: {
             type: "number",
             description: "Radius to detect targets. Default 15.0.",
          },
          damage: {
              type: "number",
              description: "Damage dealt by attacks. Default 10.0.",
          },
           health: {
              type: "number",
              description: "Starting health. Default 100.0.",
          }
        },
        required: ["assetId"],
      },
    },
  }
];
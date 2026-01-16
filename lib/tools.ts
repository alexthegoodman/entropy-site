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
            description: "The ID of the water plane component.",
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
        required: ["componentId"],
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
  }
];

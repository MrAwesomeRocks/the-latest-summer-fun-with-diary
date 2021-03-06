// priority: 6000
/*
 * Add item tags.
 *
 * Templates:
 *  - `event.add(tag, item)`
 *  - `event.remove(tag, item)`
 *  - `event.removeAll(tag)`
 *
 ** See https://mods.latvian.dev/books/kubejs/page/tageventjs for more info.
 */
onEvent("item.tags", (event) => {
  // Fix niter
  // event.add("forge:ores/niter", "emendatusenigmatica:potassium_nitrate_ore");
  // event.add("forge:ores/saltpeter", "emendatusenigmatica:potassium_nitrate_ore");

  // Jelly/Jam tags
  event.add("forge:jelly_or_jam", ["kubejs:jelly"]);

  // Dimensional Shards
  event.add("forge:dimensional_ores", /rftoolsbase:dimensionalshard_/);

  // Cryptic Redstone ore
  event.add("forge:ores/redstone", "byg:cryptic_redstone_ore");

  // IE Slag
  event.add("forge:slag", "immersiveengineering:slag");

  // Equality for Blueberries
  event.add("forge:crops/blueberries", "byg:blueberries");

  // Sawdust - bit jank but it should work
  event.add("forge:storage_blocks/wood", "thermal:sawdust_block");

  // Fluix block
  event.add("forge:storage_blocks", "ae2:fluix_block");
  event.add("forge:storage_blocks/fluix", "ae2:fluix_block");

  // Charged Certus Quartz
  event.add("forge:gems", "ae2:charged_certus_quartz_crystal");
  event.add("forge:gems/charged_certus_quartz", "ae2:charged_certus_quartz_crystal");

  // Certus Quartz
  event.add("forge:gems", "ae2:certus_quartz_crystal");

  // Silicon
  event.add("forge:gems", "ae2:silicon");
  event.add("forge:gems/silicon", "ae2:silicon");
  event.add("ae2:silicon", "#forge:gems/silicon");

  // Ender dust
  event.add("forge:dusts/ender", "ae2:ender_dust");
  // event.add("forge:dusts/ender_pearl", "emendatusenigmatica:ender_dust");

  //$ Planks
  // Non-vanilla
  const vanillaPlanks = [
    "minecraft:oak_planks",
    "minecraft:spruce_planks",
    "minecraft:birch_planks",
    "minecraft:jungle_planks",
    "minecraft:acacia_planks",
    "minecraft:dark_oak_planks",
    "minecraft:crimson_planks",
    "minecraft:warped_planks",
  ];
  event.add("forge:non_vanilla_planks", "#minecraft:planks");
  vanillaPlanks.forEach((plank) => event.remove("forge:non_vanilla_planks", plank));

  // BYG Planks
  event.add("forge:only_byg_planks", /byg:.*_planks/);
});

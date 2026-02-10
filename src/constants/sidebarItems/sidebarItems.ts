import type { SidebarSection } from "@/types/endpointsServices";

export const CATEGORY_NAMES = {
  ACCESSORY: "accessory",
  ARMOUR: "armour",
  CARD: "card",
  CURRENCY: "currency",
  FLASK: "flask",
  GEM: "gem",
  JEWEL: "jewel",
  MAP: "map",
  WEAPON: "weapon",
  BASES: "bases",
  BEAST: "beast",
  FOSSIL: "fossil",
  UNIQUE_MAP: "uniqueMap",
  DELIRIUM_ORB: "deliriumOrb",
  INCUBATOR: "incubator",
  OIL: "oil",
  RESONATOR: "resonator",
  ESSENCE: "essence",
  INVITATION: "invitation",
  FRAGMENT: "fragment",
  HEIST: "heist",
  SCARAB: "scarab",
} as const;

export const SIDEBAR_ITEMS: SidebarSection[] = [
  {
    name: "General",
    categories: [
      {
        name: CATEGORY_NAMES.CURRENCY,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png",
        route: "/currency",
      },
      {
        name: CATEGORY_NAMES.CARD,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvRGl2aW5hdGlvbi9JbnZlbnRvcnlJY29uIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/f34bf8cbb5/InventoryIcon.png",
        route: "/card",
      },
      {
        name: CATEGORY_NAMES.FRAGMENT,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9EZWxpcml1bUZyYWdtZW50IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/92fba984ee/DeliriumFragment.png",
        route: "/fragment",
      },
      {
        name: CATEGORY_NAMES.ESSENCE,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9Ib3Jyb3IxIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/748d594bde/Horror1.png",
        route: "/essence",
      },
      {
        name: CATEGORY_NAMES.INCUBATOR,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSW5jdWJhdGlvbi9JbmN1YmF0aW9uU2NhcmFicyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/edaa4a92ba/IncubationScarabs.png",
        route: "/incubator",
      },
      {
        name: CATEGORY_NAMES.OIL,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvT2lscy9PcGFsZXNjZW50T2lsIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/11d5d92171/OpalescentOil.png",
        route: "/oil",
      },
      {
        name: CATEGORY_NAMES.FOSSIL,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGVsdmUvRW5jaGFudGVkRm9zc2lsIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/314cfdc367/EnchantedFossil.png",
        route: "/fossil",
      },
      {
        name: CATEGORY_NAMES.RESONATOR,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGVsdmUvUmVyb2xsMngyQyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/584267701b/Reroll2x2C.png",
        route: "/resonator",
      },
      {
        name: CATEGORY_NAMES.BEAST,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQmVzdGlhcnlPcmJGdWxsIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/3214b44360/BestiaryOrbFull.png",
        route: "/beast",
      },
      {
        name: CATEGORY_NAMES.HEIST,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvSGVpc3QvQmx1ZXByaW50Tm90QXBwcm92ZWQ0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2705c5829f/BlueprintNotApproved4.png",
        route: "/heist",
      },
    ],
  },
  {
    name: "Equipment & Gems",
    categories: [
      {
        name: CATEGORY_NAMES.ARMOUR,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Fc3NlbmNlR2lmdGVyIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsIm11dGF0ZWQiOnRydWV9XQ/561d6160a7/EssenceGifter.png",
        route: "/armour",
      },
      {
        name: CATEGORY_NAMES.WEAPON,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1N0YXJmb3JnZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/86b81685e1/Starforge.png",
        route: "/weapon",
      },
      {
        name: CATEGORY_NAMES.GEM,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L1N1cHBvcnRQbHVzL0VjaG9QbHVzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/9cccabda03/EchoPlus.png",
        route: "/gem",
      },
      {
        name: CATEGORY_NAMES.ACCESSORY,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGVhZGh1bnRlciIsInciOjIsImgiOjEsInNjYWxlIjoxLCJtdXRhdGVkIjp0cnVlfV0/2a93cbdad2/Headhunter.png",
        route: "/accessory",
      },
      {
        name: CATEGORY_NAMES.BASES,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hc2tDcm93biIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/dbad72643e/MaskCrown.png",
        route: "/bases",
      },
      {
        name: CATEGORY_NAMES.JEWEL,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0VsZGVySmV3ZWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/278c673716/ElderJewel.png",
        route: "/jewel",
      },
      {
        name: CATEGORY_NAMES.FLASK,
        icon: "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvU2hhcGVyc0ZsYXNrIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/c6e2f8118d/ShapersFlask.png",
        route: "/flask",
      },
    ],
  },
  {
    name: "Atlas",
    categories: [
      {
        name: CATEGORY_NAMES.MAP,
        icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9BdGxhczJNYXBzL05ldy9VYmVyTWF1c29sZXVtIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsIm1uIjoyMCwibXQiOjE3fV0/01aebfbf0b/UberMausoleum.png",
        route: "/map",
      },
      {
        name: CATEGORY_NAMES.UNIQUE_MAP,
        icon: "https://web.poecdn.com/gen/image/WzI4LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9VbmlxdWVNYXAxIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/7612528d07/UniqueMap1.png",
        route: "/uniqueMap",
      },
      {
        name: CATEGORY_NAMES.SCARAB,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvU2NhcmFicy9UaWVyNFNjYXJhYlN0cm9uZ2JveGVzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/dd7b8bd53f/Tier4ScarabStrongboxes.png",
        route: "/scarab",
      },
      {
        name: CATEGORY_NAMES.DELIRIUM_ORB,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRGVsaXJpdW0vRGVsaXJpdW1PcmJGb3NzaWxzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/ea3a92a762/DeliriumOrbFossils.png",
        route: "/deliriumOrb",
      },
      {
        name: CATEGORY_NAMES.INVITATION,
        icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVlc3RJdGVtcy9DbGVhbnNpbmdGaXJlT3JiUXVlc3Q1IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/e6f9234053/CleansingFireOrbQuest5.png",
        route: "/invitation",
      },
    ],
  },
];

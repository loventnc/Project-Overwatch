// // export const AbilitiesDetails = [
// //     {
// //       name: "D.Va",
// //   abilities: {
// //     Eject: {
// //       Health: "150 health",
// //       Casttime: "1.5 seconds",
// //       Description: "D.Va's mech will automatically eject her when it reaches 1 Health. This forces D.Va into Pilot Form."
// //     },
// //     FusionCannons: {
// //         Damage: "2 - 0.6",
// //         FalloffRange: "10 - 20 meters",
// //         Headshot: "Yes",
// //         RateOfFire: "6.667 shots/s",
// //         BulletPerShot: "11 per shot",
// //         Ammo : "Infinite",
// //         SpreadAngle: "3.75 degrees",
// //         MoveSpeed: "-30% penalty"
// //     },
// //     LightGun: {
// //         Daamage: "14",
// //         Headshot: "Yes",
// //         RateOfFire: "7 shots/s",
// //         Ammo: "20",
// //         ReloadTime: "1.4 seconds",
// //         ProjectileSpeed: "50 m/s",
// //         Description: "While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster."
// //     },
// //     DefenseMatrix: {
// //         Casttime: "None",
// //         Duration: {
// //             Min: "0.5 seconds",
// //             Max: "3 seconds"
// //         },
// //         MaxRange: "10 meters",
// //         Cooldown: {
// //             Normal: "1 second",
// //             FullCharge: "6 seconds"
// //         }
// //     },
// //     Booster: {
// //         Damage: "15",
// //         Headshot: "No",
// //         Casttime: "None",
// //         Duration: {
// //             Min: "0.4 seconds",
// //             Max: "2 seconds"
// //         },
// //         MaxRange: "Up to 24 meters",
// //         MoveSpeed: {
// //             Self: "+118.2% buff",
// //             Knockback: "17.2 m/s"
// //         },
// //         Cooldown: "3.5 seconds",
// //         Description: "D.Va's mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back."
// //     },
// //     MicroMissiles: {
// //         Damage: {
// //             DirectHit: "7",
// //             SplashEnemy: "1 - 4",
// //             SplashSelf: "1 - 4"
// //         },
// //         Headshot: "No",
// //         RateOfFire: "11/s",
// //         Ammo: "18",
// //         Casttime: "0.256 seconds",
// //         AreaOfEffect: "1.5 meter radius",
// //         ProjectileSpeed: "50 m/s",
// //         Cooldown: "7 seconds"
// //     },
// //     SelfDestruct: {
// //         UltimatePoints: "1540 points",
// //         Damage: "1000-100",
// //         Headshot: "No",
// //         Casttime: "0.13 seconds",
// //         Duration: "3 seconds",
// //         AreaOfEffect: "20 meter radius",
// //         MoveSpeed: "22.1 m/s"
// //     },
// //     CallMech: {
// //         UltimatePoints: "280 points",
// //         Damage: "250",
// //         Headshot: "No",
// //         Casttime: "0.9 + 2 seconds",
// //         MaxRange: "1.5 meters",
// //         AreaOfEffect: "3 meter radius",
// //         MoveSpeed: "15.1 m/s (knockback)"
// //     }
// //   },
// //     },
// //     {
// //       name: "Doomfist",
// //       abilities: {
// //         TheBestDefense: {
// //             Health: {
// //                 Normal: "+35 overhealth per enemy",
// //                 MeteorStrike: "+75 overhealth per enemy"
// //             },
// //             Description: "Doomfist generates temporary overhealth when he deals ability damage."
// //         },
// //         HandCannon: {
// //             Damage: {
// //                 PerPellet: "5 - 1.5",
// //                 PerShot: "55 - 16.5"
// //             },
// //             FalloffRange: "15 - 30 meters",
// //             Headshot: "Yes",
// //             RateOfFire: "3 shots/s 1.36 shots/s (continuous fire of final shot)",
// //             BulletPerShot: "11",
// //             AmmoPerShot: "1",
// //             Ammo: "4",
// //             ReloadTime: "0.4 seconds (per shot)",
// //             SpreadAngle: "2.15 degrees",
// //             ProjectileSpeed: "80 m/s"
// //         },
// //         SeismicSlam: {
// //             Damage: "50 per target",
// //             Casttime: "None",
// //             AreaOfEffect: "18 meter cone at a 90° angle 1.45 meters vertical range from surface",
// //             MoveSpeed: "30 m/s",
// //             Cooldown: "6 seconds"
// //         },
// //         PowerBlock: {
// //             DamageReduction: "80%",
// //             Casttime: "None",
// //             Duration: {
// //                 Min: "0.34 seconds",
// //                 Max: "2.5 seconds"
// //             },
// //             MoveSpeed: "-35% penalty",
// //             Cooldown: "7 seconds"
// //         },
// //         RocketPunch: {
// //             Damage: {
// //                 Impact: "25 - 50",
// //                 WallSlam: "10 - 30"
// //             },
// //             Casttime: {
// //                 Min: "0.2 seconds",
// //                 Max: "1.6 seconds",
// //                 FullCharge: "1 second",
// //                 FireRecovery: "0.4 seconds"
// //             },
// //             Duration: {
// //                 MaxTravelTime: "0.5 seconds",
// //                 StunPunchImpact: "0.4 seconds",
// //                 StunWallSlam: "0.15 seconds"
// //             },
// //             MaxRange: {
// //                 Self: "6.3 - 19.7 meters",
// //                 SelfEmpowered: "9.3 - 29.4 meters",
// //                 Knockback: "5.5 - 13.2 meters"
// //             },
// //             MoveSpeed: {
// //                 Self: "44 m/s",
// //                 SelfEmpowered: "66 m/s",
// //                 Knockback: "15 - 35 m/s"
// //             },
// //             Cooldown: "4 seconds"
// //         },
// //         MeteorStrike: {
// //             UltimatePoints: "1950 points",
// //             Damage: {
// //                 InnerSphere: "300",
// //                 OuterSphere: "100 - 15"
// //             },
// //             FalloffRange: "2 – 8 meters",
// //             Healing: "75 per second",
// //             Casttime: {
// //                 InitialActivation: "0.5 seconds",
// //                 Landing: "1 + 0.8 seconds"
// //             },
// //             Duration: {
// //                 Targeting: "Up to 4 seconds",
// //                 Slow: "3 seconds"
// //             },
// //             AreaOfEffect: {
// //                 InnerSphere: "2 meter radius",
// //                 OuterSphere: "8 meter radius"
// //             },
// //             MoveSpeed : {
// //                 Targeting: "16.5 m/s",
// //                 Enemy: "-50% slow"
// //             }
// //         }
// //       },
// //     },
// //     {
// //       name: "Junker Queen",
// //       abilities: {
// //         AdrenalineRush: {
// //             Healing: "200% of wound damage dealt"
// //         },
// //         Scattergun: {
// //             Damage : {
// //                 PerPellet: "8 - 2.4",
// //                 PerShot: "80 - 24"
// //             },
// //             FalloffRange: "15 - 25 meters",
// //             Headshot: "Yes",
// //             RateOfFire: "1.33 shots/s",
// //             BulletPerShot: "10",
// //             AmmoPerShot: "1",
// //             Ammo: "8",
// //             ReloadTime: "1.5 seconds",
// //             SpreadAngle: "1.8 degrees"
// //         },
// //         JaggedBlade: {
// //             Damage: {
// //                 ThrownHit: "65",
// //                 WoundThrownHit: "30 over 3 seconds",
// //                 WoundReturnHit: "15 over 3 seconds",
// //                 Melee: "15 over 3 seconds"
// //             },
// //             Headshot: "No",
// //             Casttime: "0.13 + 0.24 seconds",
// //             Duration: "3 seconds",
// //             MaxRange: "60 meters",
// //             ProjectileSpeed: "40 m/s",
// //             Cooldown: "6 seconds"
// //         },
// //         CommandingShout: {
// //             Health: {
// //                 Self: "150 overhealth",
// //                 Ally: "50 overhealth"
// //             },
// //             Casttime: "None",
// //             Duration: {
// //                 Self: "5 seconds",
// //                 Ally: "3 seconds"
// //             },
// //             AreaOfEffect: "15 meter radius",
// //             MoveSpeed: "+30% buff",
// //             Cooldown: "14 seconds"
// //         },
// //         Carnage: {
// //             Damage: {
// //                 Impact: "90",
// //                 Wound: "40 over 3 seconds"
// //             },
// //             Casttime: "1 + 0.26 seconds",
// //             Duration: {
// //                 Wound: "3 seconds",
// //                 HitboxActive: "0.144 seconds"
// //             },
// //             MaxRange: "5 Meters",
// //             Cooldown: "8 seconds"
// //         },
// //         Rampage: {
// //             UltimatePoints: "2450 points",
// //             Damage: {
// //                 Impact: "40",
// //                 Wound: "60 over 4.5 seconds"
// //             },
// //             Casttime: "0.74 seconds",
// //             Duration: {
// //                 DoT: "4.5 seconds",
// //                 Dash: "0.864 seconds"
// //             },
// //             MaxRange: "25 meters",
// //             AreaOfEffect: "5 meters",
// //             MoveSpeed: "33 m/s"
// //         }
// //       },
// //     },
// //     {
// //       name: "Mauga",
// //       abilities: {
// //         Berserker: {
// //             Health: "50% of critical damage is converted to overhealth. (150 max)"
// //         },
// //         IncendiaryChaingun: {
// //             Damage: {
// //                 Direct: "4 - 1.2",
// //                 DoT: "15 per second"
// //             },
// //             FalloffRange: "30 - 40 meters",
// //             Headshot: "Yes",
// //             RateOfFire: "18 shots/s",
// //             Ammo: "350",
// //             ReloadTime: "2.2 seconds",
// //             Duration: "3 seconds (damage over time)",
// //             MoveSpeed: "-15% movement penalty"
// //         },
// //         VolatileChaingun: {
// //             Damage: "4 - 1.2",
// //             FalloffRange: "30 - 40 meters",
// //             Headshot: "Yes",
// //             RateOfFire: "18 shots/s",
// //             Ammo: "350",
// //             ReloadTime: "2.2 seconds",
// //             MoveSpeed: "-15% movement penalty"
// //         },
// //         Overrun: {
// //             Damage: {
// //                 Collision: "25",
// //                 StompOuterRadius: "45",
// //                 StompInnerRadius: "90"
// //             },
// //             DamageReduction: "50%",
// //             Casttime: "0.21 + 0.50 seconds",
// //             Duration: {
// //                 Min: "0.32 seconds",
// //                 Max: "2 seconds",
// //                 Leap: "0.6 seconds",
// //                 Knockback: "0.5 seconds"
// //             },
// //             MaxRange: {
// //                 Min: "4.4 meters",
// //                 Max: "28 meters",
// //                 Leap: "6.5 meters"
// //             },
// //             AreaOfEffect: {
// //                 LeapOuter: "7.2 meters radius",
// //                 LeapInner: "2.5 meters radius"
// //             },
// //             MoveSpeed: {
// //                 Buff: "+250%",
// //                 KnockbackCollision: "13.2 m/s",
// //                 KnockbackStomp: "8.6 m/s",
// //                 Knockdown: "6.9 m/s"
// //             },
// //             Cooldown: "6 seconds"
// //         },
// //         CardiacOverdrive: {
// //             Healing: "70% of damage dealt",
// //             DamageReduction: "30%",
// //             Casttime: "None",
// //             Duration: "5 seconds",
// //             AreaOfEffect: "10.5 meter radius",
// //             Cooldown: "10 seconds"
// //         },
// //         CageFight: {
// //             UltimatePoints: "2400 points",
// //             Ammo: "Infinite",
// //             Health: "1500 barrier health",
// //             Duration: "8 seconds",
// //             AreaOfEffect: "7 meters radius"
// //         }
// //       },
// //     },
// //     {
// //       name: "Orisa",
// //       abilities: {
// //         AugmentedFusionDriver: {
// //             Damage: "13 - 3.9",
// //             FalloffRange: "20 to 30 meters",
// //             Headshot: "Yes",
// //             RateOfFire: "10 rounds/s",
// //             Ammo: "Infinite",
// //             ReloadTime: {
// //                 AfterOverheat: "3 seconds",
// //                 RechargeFromFullheat: "2 seconds"
// //             },
// //             AreaOfEffect: "0.1 meters radius (projectile)",
// //             ProjectileSpeed: "100 m/s"
// //         },
// //         EnergyJavelin: {
// //             Damage: {
// //                 DirectImpact: "60",
// //                 WallCollision: "40"
// //             },
// //             Headshot: "No",
// //             Casttime: "0.3 + 0.4 seconds seconds",
// //             Duration: {
// //                 ImpactStun: "0.2 seconds",
// //                 WallStun: "0.3 seconds"
// //             },
// //             ProjectileSpeed: "70 m/s",
// //             Cooldown: "6 seconds",
// //             Description: "Orisa throws a javelin forward, damaging and knocking back enemies hit, hitting a wall will increase damage taken."
// //         },
// //         Fortify: {
// //             Health: "100 overhealth",
// //             DamageReduction: "45%",
// //             Casttime: "None",
// //             Duration: "4.5 seconds",
// //             Cooldown: "16.5 seconds",
// //             Description: "Orisa temporarily reduces damage she takes and cannot be affected by movement-impairing effects."
// //         },
// //         JavelinSpin: {
// //             Damage: {
// //                 FirstHit: "20",
// //                 SubsequentHits: "5"
// //             },
// //             Casttime: "0.1 seconds",
// //             Duration: {
// //                 Min: "0.5 seconds",
// //                 Max: "1.75 seconds",
// //                 MoveSpeed: "2 seconds"
// //             },
// //             MaxRange: "3.5 meters",
// //             MoveSpeed: {
// //                 Active: "+50% buff",
// //                 AfterSpin: "20% after spin"
// //             },
// //             Cooldown: "7 seconds",
// //             Description: "Orisa spins an energy javelin in front of her, increasing her speed, knocking back enemies and destroying any incoming projectiles."
// //         },
// //         TerraSurge: {
// //             UltimatePoints: "1950 points",
// //             Damage: {
// //                 Periodic: "19.5/s",
// //                 Release: "62 - 500"
// //             },
// //             Health: "100 overhealth (Fortify)",
// //             DamageReduction: "45% (Fortify)",
// //             Casttime: {
// //                 InitialCast: "None",
// //                 Release: "0.2 seconds",
// //                 Recovery: "0.3 seconds"
// //             },
// //             Duration: "0.75 - 4 seconds charge time",
// //             AreaOfEffect: "9 meters radius",
// //             MoveSpeed: {
// //                 Slow: "-30%",
// //                 InitialPull: "20 m/s",
// //                 KnockbackMin: "2 m/s",
// //                 KnockbackMax: "11.5 m/s"
// //             },
// //             Description: "Orisa raises her javelin into the air, spinning it above her head, which pulls in, slows and damages enemies near her, before stabbing it into the ground, dealing massive damage to enemies."
// //         }
// //       },
// //     },
// //     {
// //       name: "Ramattra",
// //       abilities: {
// //         VoidAccelerator: {
// //             Damage: "5",
// //             Headshot: "Yes",
// //             RateOfFire: "25 shots/s",
// //             Ammo: "100",
// //             ReloadTime: "1 second",
// //             AreaOfEffect: "0.1 meters (projectile radius)",
// //             ProjectileSpeed: "80 m/s"
// //         },
// //         VoidBarrier: {
// //             Health: "1000",
// //             Casttime: "0.03 + 0.5 seconds",
// //             Duration:"4 seconds",
// //             MaxRange: "35 meters",
// //             Cooldown: "13 seconds"
// //         },
// //         NemesisForm: {
// //             Health: "+225 armor",
// //             Casttime: "0.5 seconds",
// //             Duration: "8 seconds",
// //             MoveSpeed: "+20% buff",
// //             Cooldown: "7 seconds"
// //         },
// //         Pummel: {
// //             Damage: "60",
// //             Headshot: "No",
// //             RateOfFire: "1.67 shots/s",
// //             Ammo: "Infinite",
// //             MaxRange: "10.5 meters",
// //             ProjectileSpeed: "105 m/s"
// //         },
// //         Block: {
// //             DamageReduction: "75%",
// //             Casttime: "0.3 seconds",
// //             Duration: "0.2 seconds (min)",
// //             MoveSpeed: "-50% penalty"
// //         },
// //         RavenousVortex: {
// //             Damage: "15 damage per second",
// //             Headshot: "No",
// //             Casttime: "0.5 + 0.4 seconds",
// //             Duration: "3 seconds",
// //             AreaOfEffect: {
// //                 Radius: "4 meter radius",
// //                 Height: "8 meter height"
// //             },
// //             MoveSpeed: "-40% penalty",
// //             ProjectileSpeed: "30 m/s",
// //             Cooldown: "12 seconds"
// //         },
// //         Annihilation: {
// //             UltimatePoints: "2100 points",
// //             Damage: "30 damage per second",
// //             Headshot: "No",
// //             Casttime: {
// //                 OmnicForm: "0.5 seconds",
// //                 NemesisForm: "None"
// //             },
// //             Duration: "3 - 20 seconds",
// //             AreaOfEffect: "13 meter radius"
// //         }
// //       },
// //     },
// //     {
// //       name: "Reinhardt",
// //       abilities: {
// //         RocketHammer: {
// //             Damage: "85",
// //             Headshot: "No",
// //             RateOfFire: "1.04 shots/s",
// //             Casttime: "0.4 + 0.5 seconds",
// //             Duration: "0.208 seconds (hitbox active)",
// //             MaxRange: "5 meters",
// //             Description: "Reinhardt's Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing."
// //         },
// //         BarrierField: {
// //             Health: "1400 barrier health",
// //             Casttime: "0.1 + 0.29 seconds",
// //             AreaOfEffect: {
// //                 Height: "Height: 4.250 meters",
// //                 Width: "Width: 6.800 meters"
// //             },
// //             MoveSpeed: "-30% penalty",
// //             Cooldown: "5 seconds if destroyed",
// //             Description: "Reinhardt projects a broad, forward-facing energy shield, which can absorb substantial damage before it is destroyed. Though Reinhardt can protect himself and his companions behind the shield, he cannot attack while sustaining it."
// //         },
// //         Charge: {
// //             Damage: {
// //                 PinnedToWall: "225",
// //                 CollisionWithoutPin: "50"
// //             },
// //             Casttime: {
// //                 WallImpact: "0.6 + 0.5 seconds",
// //                 Canceled: "0.6 + 0.1 seconds"
// //             },
// //             Duration: {
// //                 Min: "0.3 seconds",
// //                 Max: "3 seconds",
// //                 StunOnWallHit: "0.65 seconds"
// //             },
// //             MaxRange: "50.2 meters",
// //             MoveSpeed: {
// //                 Charge: "+200% buff",
// //                 KnockbackIndirectHit: "31.2 m/s",
// //                 KnockbackCanceledPin: "11 m/s"
// //             },
// //             Cooldown: "7 seconds",
// //             Description: "Reinhardt charges forth in a straight line, grabbing hold of enemies in his path. If he collides with a wall, foes he’s carrying suffer extreme damage."
// //         },
// //         FireStrike: {
// //             Damage: "100",
// //             Headshot: "No",
// //             Casttime: "0.5 + 0.6 seconds",
// //             AreaOfEffect: "0.85 meters projectile radius",
// //             ProjectileSpeed: "25 m/s",
// //             Cooldown: "6 seconds 2 charges",
// //             Description: "By whipping his Rocket Hammer forward, Reinhardt slings a flaming projectile which pierces and damages any enemies it touches."
// //         },
// //         Earthshatter: {
// //             UltimatePoints: "1650 points",
// //             Damage: {
// //                 Base: "50",
// //                 CloseRange: "120 (< 1.75m)"
// //             },
// //             Casttime: "0.4 + 0.5 seconds",
// //             Duration: "2.75 second (knock down)",
// //             MaxRange: "20 meters",
// //             AreaOfEffect: {
// //                 Arc: "54 degrees",
// //                 Height: "1.770 meters"
// //             },
// //             ProjectileSpeed: "40 m/s",
// //             Description: "Reinhardt forcefully slams his rocket hammer into the ground, knocking down and damaging all enemies in front of him."
// //         }
// //       },
// //     },
// //     {
// //       name: "Roadhog",
// //       abilities: {
// //         ScrapGun:{
// //             Damage: {
// //                 PerPellet: "6.25 - 1.88",
// //                 PerSharpnel: "15 - 4.5",
// //                 PerShot: "160 - 48"
// //             },
// //             FalloffRange: "30 – 50 meters",
// //             Headshot: "Yes (1.5x)",
// //             RateOfFire: "1.25 shots/s",
// //             BulletPerShot: {
// //                 Pellets: "16",
// //                 Sharpnel: "4"
// //             },
// //             AmmoPerShot: "1",
// //             Ammo: "6",
// //             ReloadTime: "1.75 seconds animation",
// //             SpreadAngle: "20.1 degrees",
// //             ProjectileSpeed: "80 m/s",
// //             Description: "Roadhog's Scrap Gun fires short-range blasts of shrapnel with a wide spread."
// //         },
// //         TakeABreather: {
// //             Healing: "200 per second",
// //             DamageReduction: "40%",
// //             Casttime: "0.21 + 0.54 seconds",
// //             Duration: {
// //                 Min: "0.55 seconds",
// //                 Max: "2.5 seconds"
// //             },
// //             Cooldown: "1 seconds",
// //             Description: "Roadhog restores a chunk of his health over a brief period of time."
// //         },
// //         ChainHook: {
// //             Damage: "5",
// //             Headshot: "No",
// //             Casttime: "0.1 + 0.2 seconds",
// //             Duration: "0.5 seconds (min)",
// //             MaxRange: "20 meters",
// //             AreaOfEffect: {
// //                 Enemy: "0.5 meter radius",
// //                 WallorShield: "None"
// //             },
// //             MoveSpeed: {
// //                 Self: "-50% movement speed penalty",
// //                 PulledEnemy: "40 m/s"
// //             },
// //             ProjectileSpeed: "62 m/s",
// //             Cooldown: "6 seconds",
// //             Description: "Roadhog hurls his chain at a target; if it catches, he yanks them into close range."
// //         },
// //         PigPen: {
// //             Damage: {
// //                 Initial: "60",
// //                 Periodic: "30/s"
// //             },
// //             Health: "100",
// //             Casttime: "0.11 + 0.58 seconds",
// //             Duration: {
// //                 ArmingDelay: "1 second",
// //                 Slow: "3 seconds"
// //             },
// //             AreaOfEffect: {
// //                 Trigger: "2.5 meter radius",
// //                 SlowArea: "4 meter radius"
// //             },
// //             MoveSpeed: "-40% (slow, enemies)",
// //             Cooldown: "12 seconds"
// //         },
// //         WholeHog: {
// //             UltimatePoints: "2800 points",
// //             Damage: "7 - 2.1",
// //             FalloffRange: "30 - 40 meters",
// //             Headshot: "Yes",
// //             RateOfFire: "8 shots/s",
// //             BulletPerShot: "16 per shot",
// //             Casttime: "0.5 + 1 seconds",
// //             Duration: "7.5 seconds",
// //             SpreadAngle: {
// //                 Horizontal: "40 degrees",
// //                 Vertical: "3 degrees"
// //             },
// //             MoveSpeed: "13.9 m/s (knockback)",
// //             Description: "After cramming a top-loader onto his Scrap Gun, Roadhog pours in ammo. For a short time, he can crank out a stream of shrapnel that knocks back enemies."
// //         }
// //       }
// //     },
// // ];

// // export const AbilitiesDetails = [
// //     {
// //         name: "1",
// //         abilities: {
// //             1:{
// //                 1: "1",
// //                 2: "2",
// //                 3: "3",
// //                 4: "4"
// //             },
// //             2:{
// //                 1: "1",
// //                 2: "2",
// //                 3: "3",
// //                 4: "4"
// //             },
// //         }
// //     },
// //     {
// //         name: "2",
// //         abilities: {
// //             1:{
// //                 1: "1",
// //                 2: "2",
// //                 3: "3",
// //                 4: "4"
// //             },
// //             2:{
// //                 1: "1",
// //                 2: "2",
// //                 3: "3",
// //                 4: "4"
// //             },
// //         }
// //     }
// // ]

// export const AbilitiesDetails = [
//     {
//         "name": "D.Va",
//         "description": "D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland.",
//         "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png",
//         "role": "tank",
//         "location": "MEKA Base, Busan, South Korea (formerly), Watchpoint: Gibraltar",
//         "hitpoints": {
//             "shields": 0,
//             "armor": 300,
//             "health": 350,
//             "total": 650
//         },
//         "abilities": [
//             {
//                 "name": "Fusion Cannons",
//                 "description": {
//                     "Damage": "2 - 0.6",
//                     "FalloffRange": "10 - 20 meters",
//                     "Headshot": "Yes",
//                     "RateOfFire": "6.667 shots/s",
//                     "BulletPerShot": "11 per shot",
//                     "Ammo": "Infinite",
//                     "SpreadAngle": "3.75 degrees",
//                     "MoveSpeed": "-30% penalty"
//                 },


//                 "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/29bd15ebb32c23483a59df18a79f71301b2128c05b2f8d0c052ab86e0715e07d.png",
//                 "video": {
//                     "thumbnail": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltdfafff3f6e7da8bb/6339051eec7e18758be5104a/DVA_FUSIONCANNON.jpg",
//                     "link": {
//                         "mp4": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltbab346e856582d6b/633905181ccd046877c0e4e3/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaFusionCannons_WEB_16x9_1920x1080p30_H264.mp4",
//                         "webm": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt0cf1edda6843f5e5/633905182dc7636608cc7122/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaFusionCannons_WEB_16x9_1920x1080p30_WEBM.webm"
//                     }
//                 }
//             },
//             {
//                 "name": "Light Gun",
//                 "description": "Automatic weapon.",
//                 "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/24074dececa8bf7b57628509e70731916db62b5ab5b30660ac1727b20bbc5b4d.png",
//                 "video": {
//                     "thumbnail": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt686e78b1c55884b8/6339051e1ccd046877c0e4e7/DVA_LIGHTGUN.jpg",
//                     "link": {
//                         "mp4": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt819a073285113161/63390518425ea374105b614d/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaLightGun_WEB_16x9_1920x1080p30_H264.mp4",
//                         "webm": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt52541924e0fba2d1/633905177e84e17596f9c8a6/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaLightGun_WEB_16x9_1920x1080p30_WEBM.webm"
//                     }
//                 }
//             },
//             {
//                 "name": "Boosters",
//                 "description": "Fly in the direction you are facing.",
//                 "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/89d6beb25b21eacd5a181b96438436692d9ad403fcef19873e506f6d46ed37a3.png",
//                 "video": {
//                     "thumbnail": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt5c747fcc07e61085/6339051e8537f87bfbcdc404/DVA_BOOSTERS.jpg",
//                     "link": {
//                         "mp4": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltdee1abe14411fab7/63390517399a07678557c147/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaBoosters_WEB_16x9_1920x1080p30_H264.mp4",
//                         "webm": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt7d432cfbd853fe5b/63390517ec7e18758be51046/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaBoosters_WEB_16x9_1920x1080p30_WEBM.webm"
//                     }
//                 }
//             },
//             {
//                 "name": "Defense Matrix",
//                 "description": "Block projectiles in an area in front of you.",
//                 "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2713a8ef6742f4009da072d66d382eb8ff3dd8e00828deadb5af1a93b0d8ce4b.png",
//                 "video": {
//                     "thumbnail": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt13e1a6ddb18371b9/6339051eb8dbde69f52798fa/DVA_DEFENSEMATRIX.jpg",
//                     "link": {
//                         "mp4": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt215a0dbae5a559f0/6339051764fe5a7d4481a06c/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaDefenseMatrix_WEB_16x9_1920x1080p30_H264.mp4",
//                         "webm": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt6bf953a22b0e5868/63390517ed7dcc6a002803ac/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaDefenseMatrix_WEB_16x9_1920x1080p30_WEBM.webm"
//                     }
//                 }
//             },
//             {
//                 "name": "Micro Missiles",
//                 "description": "Launch a volley of explosive rockets.",
//                 "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1787326d46d04aa10872fc30fe512ab3575781735110dfb178ff38da352facb7.png",
//                 "video": {
//                     "thumbnail": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt1b6543cefd5b666e/6339051ee3c2a2741688cbab/DVA_MICROMISSILES.jpg",
//                     "link": {
//                         "mp4": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt6d005b67c7df369c/63390518b8dbde69f52798f6/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaMicroMissiles_WEB_16x9_1920x1080p30_H264.mp4",
//                         "webm": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt8bd5a7ad1b8c7cf5/633905173922a2677fc88d06/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaMicroMissiles_WEB_16x9_1920x1080p30_WEBM.webm"
//                     }
//                 }
//             },
//             {
//                 "name": "Self-Destruct",
//                 "description": "Eject and overload your mech, causing it to explode after a short time.",
//                 "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f76e4b710ceb71f2e260029fc8d0ad15b227e3f006ab1b6c0c4e44da98c2d614.png",
//                 "video": {
//                     "thumbnail": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt1b6543cefd5b666e/6339051ee3c2a2741688cbab/DVA_MICROMISSILES.jpg",
//                     "link": {
//                         "mp4": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt5b59f3a07aa5c7f3/63390518f87c00687e8ef22e/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaSelfDestruct_WEB_16x9_1920x1080p30_H264.mp4",
//                         "webm": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blta934a2a156df8bf3/63390518da1d806602f83ef6/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaSelfDestruct_WEB_16x9_1920x1080p30_WEBM.webm"
//                     }
//                 }
//             },
//             {
//                 "name": "Call Mech",
//                 "description": "Call down a new mech.",
//                 "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/848d8cd24eb0327a023a564447d79dd8b367c21a378d328cd92896a21b775219.png",
//                 "video": {
//                     "thumbnail": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt42f7fff2d52f0dd3/6339051e3917977bfd9861b3/DVA_CALLMECH.jpg",
//                     "link": {
//                         "mp4": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt6c5da1d1cf0edcb9/633905171a0b5e7d3d1ec5a1/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaCallMech_WEB_16x9_1920x1080p30_H264.mp4",
//                         "webm": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt0c62ae7ae46c427e/633905173917977bfd9861af/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaCallMech_WEB_16x9_1920x1080p30_WEBM.webm"
//                     }
//                 }
//             },
//             {
//                 "name": "Eject!",
//                 "description": "Eject out of your mech when it is destroyed.",
//                 "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/692a603c9945e600b195d1fd56364979363926f42d950b95c4811e7047e94c97.png",
//                 "video": {
//                     "thumbnail": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltf33ca7c7d08cdbc9/6339051e399a07678557c14b/DVA_EJECT.jpg",
//                     "link": {
//                         "mp4": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltfb6c61e5f29fde24/633905181a0b5e7d3d1ec5a5/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaEject_WEB_16x9_1920x1080p30_H264.mp4",
//                         "webm": "https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltb5b7251aa6743026/633905178537f87bfbcdc400/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_DVaEject_WEB_16x9_1920x1080p30_WEBM.webm"
//                     }
//                 }
//             }
//         ],
//         "story": {
//             "summary": "Hana Song—better known by her screen name “D.Va”–is the best of the best. A former professional gamer, D.Va now puts her skills to use as a mech pilot in defense of South Korea. She and the other pilots, known as the MEKA Squad, stand between their country and the invading Gwishin: a mechanical threat from deep beneath the sea.",
//             "media": {
//                 "type": "video",
//                 "link": "https://youtu.be/q7j2d6YCQbg"
//             },
//             "chapters": [
//                 {
//                     "title": "Gwishin",
//                     "content": "More than two decades ago, South Korea was attacked by a colossal mechanical monstrosity that rose from the depths of the East China Sea. The massive, lumbering construct caused catastrophic damage to coastal cities before it was driven back beneath the waves. In response, the South Korean government developed a mechanized armored drone unit, called MEKA, to protect urban environments in future engagements with the omnic threat. The government's fears proved to be well founded, as a disturbing pattern of attacks emerged. Every few years, the monstrosity would rise from the sea to assault South Korea and its neighbors. The threat learned from these encounters, often reconfiguring itself in a different form and appearing with new weapons and capabilities. Each incident ended in a stalemate, with the monstrosity defeated but not destroyed.",
//                     "picture": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt61b8f52c5724688d/638809023cbefd11108111d1/dva-00.jpg"
//                 },
//                 {
//                     "title": "Meka squad",
//                     "content": "As the threat continued to adapt, it eventually disrupted MEKA's drone-control networks, forcing the military to place pilots in the mechs. Scrambling to find suitable candidates, the government turned to the country's professional gamers, who possessed the necessary reflexes and instincts to operate the mechs' advanced weapons systems. Top stars willingly joined the effort via the nation's compulsory military service, including reigning world champion Hana Song, also known as \"D.Va.\" Famous for her elite skills, D.Va was a fierce competitor who played to win at all costs, and she had a well-earned reputation for showing no mercy to her opponents. D.Va quickly grew in skill to become MEKA’s top pilot, even streaming combat operations to her adoring fans, but the Gwishin threats’ increasing attacks on South Korea began to take a heavy toll on the MEKA squad. Where MEKA could once count on months of training and downtime between robotic assaults, a sudden attack between predicted intervals forced Hana to repel the Gwishin alone. The media praised D.Va's singlehanded defense of South Korea, though in truth, the superstar was seconds from a real game over. As the Null Sector threat emerged in Korea, D.Va obtained a special dispensation from her commander to join up as one of Overwatch's new guard, assessing the Null Sector threat alongside Cole Cassidy and his latest recruits.",
//                     "picture": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt72d062619b59e3d8/63880902bbfd340e8ad2e41b/dva-01.jpg"
//                 }
//             ]
//         }
//     }
// ]
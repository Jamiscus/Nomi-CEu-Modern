ServerEvents.recipes(event => {

// Base AE2
    // ME Controller
    event.remove({ output: 'ae2:controller' })
    event.shaped(
        Item.of('ae2:controller'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'kubejs:fluix_plate',
            C: 'ae2:energy_acceptor'
        }
    )

    // Energy Acceptor
    event.remove({ output: 'ae2:energy_acceptor' })
    event.shaped(
        Item.of('ae2:energy_acceptor'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:electrical_steel_plate',
            B: 'kubejs:fluix_plate',
            C: 'gtceu:lv_machine_hull'
        }
    )

    // ME Chest
    event.remove({ output: 'ae2:chest' })
    event.shaped(
        Item.of('ae2:chest'), [
            'ABA',
            'CDE',
            'FGF'
        ], {
            A: 'ae2:quartz_glass',
            B: '#ae2:illuminated_panel',
            C: 'gtceu:certus_quartz_plate',
            D: 'gtceu:aluminium_crate',
            E: 'kubejs:fluix_plate',
            F: 'gtceu:dark_steel_block',
            G: 'gtceu:nether_quartz_plate'
        }
    )

    // ME Drive
    event.remove({ output: 'ae2:drive' })
    event.shaped(
        Item.of('ae2:drive'), [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_emitter',
            C: '#forge:circuits/lv',
            D: 'ae2:chest',
            E: 'gtceu:mv_sensor'
        }
    )

    // Inscriber
    event.remove({ output: 'ae2:inscriber' })
    event.shaped(
        Item.of('ae2:inscriber'), [
            'ABA',
            'CDA',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:mv_electric_piston',
            C: 'ae2:fluix_crystal',
            D: 'gtceu:mv_machine_hull'
        }
    )

    // Patterns
    event.remove({ output: 'ae2:blank_pattern' })
    event.shaped(
        Item.of('ae2:blank_pattern', 8), [
            'AAA',
            'BCB',
            'BBB'
        ], {
            A: 'gtceu:silver_fine_wire',
            B: 'gtceu:polyethylene_plate',
            C: '#forge:circuits/hv'
        }
    )

    // Pattern Provider
    event.remove({ output: 'ae2:pattern_provider' })
    event.shaped(
        Item.of('ae2:pattern_provider'), [
            'ABA',
            'CDE',
            'AAA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_robot_arm',
            C: 'ae2:annihilation_core',
            D: 'gtceu:mv_machine_hull',
            E: 'ae2:formation_core'
        }
    )

    // Molecular Assembler
    event.remove({ output: 'ae2:molecular_assembler' })
    event.shaped(
        Item.of('ae2:molecular_assembler'), [
            'ABA',
            'CDE',
            'ABA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'ae2:quartz_glass',
            C: 'ae2:annihilation_core',
            D: 'minecraft:crafting_table',
            E: 'ae2:formation_core'
        }
    )

    // Interface
    event.remove({ output: 'ae2:interface' })
    event.shaped(
        Item.of('ae2:interface'), [
            'ABA',
            'CDE',
            'AAA'
        ], {
            A: 'gtceu:certus_quartz_plate',
            B: 'gtceu:mv_conveyor_module',
            C: 'ae2:annihilation_core',
            D: 'gtceu:mv_machine_hull',
            E: 'ae2:formation_core'
        }
    )

    // Quantum Ring
    event.remove({ output: 'ae2:quantum_ring' })
    event.shaped(
        Item.of('ae2:quantum_ring'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:stainless_steel_plate',
            B: 'gtceu:certus_quartz_plate',
            C: 'gtceu:quantum_star',
        }
    )

    // Quantum Link Chamber
    event.remove({ output: 'ae2:quantum_link' })
    event.shaped(
        Item.of('ae2:quantum_link'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'ae2:quartz_glass',
            B: 'ae2:fluix_pearl',
            C: 'gregtech:certus_quartz_plate'
        }
    )

    // Storage Component

    // Storage Housing
    event.remove({ output: 'ae2:item_cell_housing' })
    event.shaped(
        Item.of('ae2:item_cell_housing'), [
            'ABA',
            'B B',
            'ABA'
        ], {
            A: 'gtceu:red_alloy_fine_wire',
            B: 'gtceu:electrical_steel_plate'
        }
    )

    // CPUs

    // Charger
    event.remove({ output: 'ae2:charger' })
    event.shaped(
        Item.of('ae2:charger'), [
            'ABA',
            'A  ',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:certus_quartz_plate'
        }
    )


// Extended AE2
    // Big Drive
    event.remove({ output: 'expatternprovider:ex_drive' })
    event.shaped(
        Item.of('expatternprovider:ex_drive'), [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: 'kubejs:fluix_plate',
            B: 'ae2:capacity_card',
            C: 'ae2:spatial_pylon',
            D: 'ae2:drive',
            E: 'gtceu:ev_machine_hull'
        }
    )

    // Big Pattern Provider
})

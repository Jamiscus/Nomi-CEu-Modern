//Sides 1, Front 2, Trims 3, Toate iau prima oara proprietatea de la S

ItemEvents.rightClicked('kubejs:debug_laser', event => {
    event.player.tell(`---------------------------------------------------`);
    event.player.tell('Code works');
    event.player.tell('');

    if (event.player.offHandItem != `0 air`) {
        event.player.getOffhandItem().setNbt(`{MatS:{id:"minecraft:dirt", Count:1b},MatF:{id:"minecraft:stone", Count:1b},MatT:{id:"minecraft:calcite", Count:1b}}`);
        event.player.tell(`Offhand Item:`);
        event.player.tell(event.player.getOffHandItem());
        event.player.tell(``);
        if (event.player.getOffHandItem().getNbt()) {
            event.player.tell(Text.of(`Offhand NBT: `).append(Text.prettyPrintNbt(event.player.getOffHandItem().getNbt())));
            event.player.tell('Ignore the line below vvv');
            event.player.tell(event.player.getOffHandItem().getNbt());
            event.player.tell(``);
        }
    }

    if (event.getTarget().block) {
        event.player.tell(`Currently targeting:`);
        event.player.tell(event.getTarget().block);
        event.player.tell(`X: ${event.getTarget().block.getX()}`);
        event.player.tell(`Y: ${event.getTarget().block.getY()}`);
        event.player.tell(`Z: ${event.getTarget().block.getZ()}`);

        if (event.getTarget().block.entityData) {
            event.player.tell(Text.of(`Target NBT: `).append(Text.prettyPrintNbt(event.getTarget().block.entityData)));
        }

    } else {event.player.tell(`Not targeting anything.`)}
});


ItemEvents.rightClicked('kubejs:hand_framing_tool', event => {
    event.player.tell(`H.F.T. Code Running...`);
    if (event.player.getMainHandItem() == "1 hand_framing_tool") {
        event.player.tell("Applied NBT from main hand.");
        event.getTarget().block.setEntityData(event.player.getMainHandItem().getNbt());
    }
    if (event.player.getOffHandItem() == "1 hand_framing_tool") {
        event.getTarget().block.setEntityData(event.player.getOffHandItem().getNbt());
        event.getTarget().block.level.sendBlockUpdated(event.getTarget().block.entity.blockPos, event.getTarget().block.blockState, event.getTarget().block.blockState, 11); //FIXME-Texture not updating on block placed
        event.player.tell("Applied NBT from off hand.");
    }
});



//TODO-Make H.F.T. have "material from crafting" functionality
/*ServerEvents.recipes(event => {
    event.shaped(
        `kubejs:hand_framing_tool{S: "${S}", F: "${F}, T: "${T}"}`, [
            `S  `,
            ` H `,
            `   `
        ], {
            S: Ingredient.block,
            H: `kubejs:hand_framing_tool`
        }
    );
    event.shaped(
        `kubejs:`
    )

});*/


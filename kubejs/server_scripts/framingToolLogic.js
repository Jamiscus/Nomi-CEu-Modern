ItemEvents.rightClicked('kubejs:hand_framing_tool', event => {
    for (let i = 0; i < 20; i++) {
        event.player.tell('');
    } 
    event.player.tell('Code works');
    event.player.tell('');
    event.player.tell(event.getTarget().block);
    event.player.tell(`X: ${event.getTarget().block.getX()}`);
    event.player.tell(`Y: ${event.getTarget().block.getY()}`);
    event.player.tell(`Z: ${event.getTarget().block.getZ()}`);
    event.player.tell(event.player.getOffhandItem().getNbt());
})



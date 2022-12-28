(function() {
  Crustulum.Hijack.hasGod = () => {};
  setTimeout(() => {
    Game.hasGod = undefined;
  }, 2000);
}());
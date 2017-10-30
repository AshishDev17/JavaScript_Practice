/*
 The Utopian tree goes through 2 cycles of growth every year. The first growth cycle occurs during the spring,
 when it doubles in height. The second growth cycle occurs during the summer, when its height increases by 1 meter.
 Now, a new Utopian tree sapling is planted at the onset of the spring. Its height is 1 meter. Can you find the
 height of the tree after N growth cycles?
 N = 3:
 the height of the tree after 1st cycle = 2
 the height of the tree after 2nd cycle = 3
 the height of the tree after 3rd cycle = 6
 N = 4:
 the height of the tree after 4th cycle = 7
 */

const findHeight = (n) => {
  let height = 1;
  let cycle = 1;
  while (cycle <= n){
    if (cycle % 2 !== 0) height = height * 2;
    else height = height + 1;
    cycle++;
  }

  return height;
};

console.log('height ', findHeight(3));

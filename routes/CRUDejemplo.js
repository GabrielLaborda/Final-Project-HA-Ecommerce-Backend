// get all
router.get('/', () => {
  return 'index';
});
// create one
router.post('/', () => {
  return 'store';
});
// show one
router.get('/:id', () => {
  return 'show';
});
// edit one
router.patch('/:id', () => {
  return 'update';
});
// delete one
router.delete('/:id', () => {
  return 'destroy';
});

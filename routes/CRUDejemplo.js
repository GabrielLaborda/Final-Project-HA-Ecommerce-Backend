// get all
router.get('/', () => {
  return 'index';
});
// show creation form
router.get('/create', () => {
  return 'create';
});
// create one
router.post('/', () => {
  return 'store';
});
// show one
router.get('/:id', () => {
  return 'show';
});
// show edit form
router.get('/:id/edit', () => {
  return 'edit';
});
// edit one
router.patch('/:id', () => {
  return 'update';
});
// delete one
router.delete('/:id', () => {
  return 'destroy';
});

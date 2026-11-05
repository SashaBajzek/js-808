import {render} from '../../entry-server';

// Same render the build uses to prerender dist/index.html.
it('renders to HTML without crashing', () => {
  const html = render();
  expect(html).toContain('JS-808');
  expect(html).toContain('Loop 1');
});

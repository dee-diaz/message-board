const messages = [
  {
    text: 'Pushed the new spacing design token, check it in Figma',
    user: 'Rodrigo',
    added: new Date('2026-06-15T09:12:00'),
  },
  {
    text: 'Why is the grid on 8px and not 4? Our icons are 20px',
    user: 'Mei',
    added: new Date('2026-06-15T09:18:00'),
  },
  {
    text: '4px base, 8px step. We align icons to optical center, not the grid',
    user: 'Rodrigo',
    added: new Date('2026-06-15T09:21:00'),
  },
  {
    text: 'Secondary button contrast fails WCAG AA, only 3.8:1',
    user: 'Amara',
    added: new Date('2026-06-15T10:05:00'),
  },
  {
    text: 'Good catch, bumping the foreground token one step darker',
    user: 'Rodrigo',
    added: new Date('2026-06-15T10:11:00'),
  },
  {
    text: 'Can we kill the drop shadow on cards? Reads heavy on dark mode',
    user: 'Tomas',
    added: new Date('2026-06-15T11:30:00'),
  },
  {
    text: 'Replace it with a 1px border using the border-subtle token',
    user: 'Mei',
    added: new Date('2026-06-15T11:34:00'),
  },
  {
    text: 'Prototype the empty state before we spec the real data view please',
    user: 'Priya',
    added: new Date('2026-06-15T13:47:00'),
  },
  {
    text: 'Anyone have the Lottie file for the loading spinner? Link is dead',
    user: 'Kenji',
    added: new Date('2026-06-15T14:02:00'),
  },
  {
    text: 'Re-uploaded it to the shared drive, refresh and try again',
    user: 'Lena',
    added: new Date('2026-06-15T14:15:00'),
  },
  {
    text: 'Focus ring is invisible on the dark inputs, accessibility blocker',
    user: 'Amara',
    added: new Date('2026-06-15T15:20:00'),
  },
  {
    text: 'Adding a 2px offset ring with the accent token, PR up in a sec',
    user: 'Tomas',
    added: new Date('2026-06-15T15:41:00'),
  },
  {
    text: 'Can the modal close on backdrop click? Feels trapped otherwise',
    user: 'Sofia',
    added: new Date('2026-06-16T09:03:00'),
  },
  {
    text: 'Yes but keep Esc as primary, backdrop click is the fallback',
    user: 'Priya',
    added: new Date('2026-06-16T09:09:00'),
  },
  {
    text: 'Type scale jumps from 14 to 20, we need a 16 step in between',
    user: 'Mei',
    added: new Date('2026-06-16T10:27:00'),
  },
  {
    text: 'Agreed, adding text-base at 16/24. Updating the ramp now',
    user: 'Rodrigo',
    added: new Date('2026-06-16T10:33:00'),
  },
  {
    text: 'Loading skeletons shimmer too fast, gives me a headache honestly',
    user: 'Kenji',
    added: new Date('2026-06-16T11:50:00'),
  },
  {
    text: 'Slowing the animation to 1.5s and respecting prefers-reduced-motion',
    user: 'Lena',
    added: new Date('2026-06-16T11:58:00'),
  },
  {
    text: 'Should toast notifications stack or replace? Designs show both',
    user: 'Sofia',
    added: new Date('2026-06-16T13:14:00'),
  },
  {
    text: 'Stack, max 3 visible, oldest collapses into a counter',
    user: 'Priya',
    added: new Date('2026-06-16T13:22:00'),
  },
  {
    text: 'Shipping the component catalog to staging, ping me if anything breaks',
    user: 'Diego',
    added: new Date('2026-06-16T16:40:00'),
  },
  {
    text: 'Tested on staging, dropdown z-index conflicts with the sticky header',
    user: 'Amara',
    added: new Date('2026-06-16T17:05:00'),
  },
];

module.exports = messages;
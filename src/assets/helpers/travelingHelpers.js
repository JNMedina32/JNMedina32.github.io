export const paperPlaneSequence = (scope) => [
  [
    scope.current,
    {
      x: [50, 270],
      y: [90, 95],

      scale: [1, 2, 1],
    },
    { duration: 5, ease: "linear" },
  ],
  [scope.current, { rotate: [174] }, { duration: 2, ease: "linear" }],
  [
    scope.current,
    { x: [35], y: [120], scale: [1, 2, 1] },
    { duration: 5, ease: "linear" },
  ],
  [scope.current, { rotate: [-30] }, { duration: 2, ease: "linear" }],
  [
    scope.current,
    { x: [170], y: [70], scale: [1, 2, 1] },
    { duration: 5, ease: "linear" },
  ],
  [scope.current, { rotate: [-200] }, { duration: 2, ease: "linear" }],
  [
    scope.current,
    { x: [50], y: [90], scale: [1, 2, 1] },
    { duration: 5, ease: "linear" },
  ],
  [scope.current, { rotate: [0] }, { duration: 2, ease: "linear" }],
];


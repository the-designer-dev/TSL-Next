/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
  "@fullcalendar/list",
  "@fullcalendar/bootstrap5"
]);

module.exports = withTM({
  eslint: { ignoreDuringBuilds: true, },
  images: {
    domains: ['localhost', 'cdn0.iconfinder.com' , 'tsl.designer-dev.com'],
  },
})

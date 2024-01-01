module.exports = {
  apps: [{
    name: "frontend_test",
    script: "npm run dev",
    error_file: "./pm2-error.log",
    out_file: "./pm2-out.log",
  }]
}

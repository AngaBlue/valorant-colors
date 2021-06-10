let colors = {
    rainbow: "",
    enemy: "#f05c57",
    system: "#fee185",
    self: "#eaeeb2",
    notification: "#64d097",
    team: "#95bed5",
    whisper: "#ff9ff8",
    warning: "#ff9ff8",
    observer: "#999"
}

colors.rainbow = `linear-gradient(135deg, ${Object.values(colors).slice(1, 7).join(", ")})`

export default colors;
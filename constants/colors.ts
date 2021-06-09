let colors = {
    enemy: "#f05c57",
    system: "#fee185",
    notification: "#64d097",
    team: "#95bed5",
    warning: "#ff9ff8",
    rainbow: ""
}

colors.rainbow = `linear-gradient(135deg, ${Object.values(colors).filter(c => c).join(", ")})`

export default colors;
function fillTarget() {
    var COLORS = {
        'Black': 0,
        'White': 1,
        'Blue': 2,
        'Red': 3,
        'Green': 4,
        'Yellow': 5,
        'Purple': 6,
        'Cyan': 7
    }
    TARGET_COLORS = ["Black", "Blue", "Black", "Blue", "Blue", "Black", "Blue", "Black", "Blue", "Blue", "Black", "Black", "Blue", "Black", "Blue", "Black", "Blue", "Black", "Black", "Blue", "Blue", "Black", "Blue", "Blue", "Black", "Blue", "Black", "Black", "Blue", "Black", "Blue", "Black", "Black", "Black", "Black", "Black", "Black", "Blue", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Cyan", "Black", "Blue", "Black", "Blue", "Black", "Black", "Blue", "Black", "Yellow", "Green", "Yellow", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Cyan", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Blue", "Black", "Black", "Black", "Black", "Black", "Blue", "Black", "Yellow", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Black", "Black", "Black", "Black", "Black", "Black", "Blue", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Blue", "Black", "Black", "Blue", "Black", "Black", "Blue", "Blue", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Cyan", "Green", "Green", "Blue", "Black", "Black", "Black", "Black", "Blue", "Black", "Blue", "Blue", "Black", "Yellow", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Yellow", "Green", "Green", "Black", "Blue", "Black", "Black", "Black", "Blue", "Black", "Black", "Black", "Black", "Black", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Blue", "Black", "Black", "Black", "Black", "Blue", "Purple", "Purple", "Black", "Black", "Black", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Blue", "Black", "Black", "Black", "Black", "Blue", "Black", "Purple", "Black", "Black", "Blue", "Blue", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Cyan", "Green", "Green", "Green", "Cyan", "Green", "Blue", "Blue", "Blue", "Black", "Black", "Purple", "Purple", "Black", "Black", "Purple", "Purple", "Purple", "Black", "Black", "Black", "Black", "Black", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Black", "Black", "Blue", "Purple", "Black", "Blue", "Purple", "Purple", "Purple", "Purple", "Purple", "Black", "Black", "Black", "Black", "Blue", "Blue", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Blue", "Blue", "Purple", "Blue", "Purple", "Blue", "Blue", "Black", "Black", "Black", "Black", "Black", "Black", "Black", "Blue", "Black", "Green", "Yellow", "Green", "Green", "Green", "Green", "Cyan", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Blue", "Black", "Blue", "Purple", "Blue", "Blue", "Blue", "Blue", "Purple", "Purple", "Purple", "Purple", "Purple", "Blue", "Blue", "Blue", "Black", "Black", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Blue", "Purple", "Purple", "Blue", "Purple", "Purple", "Blue", "Blue", "Black", "Blue", "Purple", "Black", "Blue", "Purple", "Blue", "Black", "Blue", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Blue", "Black", "Black", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Purple", "Purple", "Purple", "Black", "Black", "Blue", "Black", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Blue", "Blue", "Purple", "Black", "Blue", "Blue", "Blue", "Blue", "Blue", "Purple", "Purple", "Purple", "Purple", "Blue", "Purple", "Black", "Black", "Blue", "Black", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Yellow", "Green", "Black", "Black", "Black", "Black", "Black", "Black", "Purple", "Blue", "Blue", "Purple", "Blue", "Purple", "Blue", "Blue", "Black", "Black", "Black", "Black", "Blue", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Cyan", "Green", "Blue", "Blue", "Black", "Black", "Black", "Black", "Purple", "Purple", "Purple", "Blue", "Purple", "Purple", "Black", "Black", "Black", "Black", "Black", "Black", "Blue", "Black", "Black", "Black", "Black", "Black", "Black", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Black", "Black", "Black", "Black", "Black", "Black", "Blue", "Blue", "Blue", "Blue", "Blue", "Black", "Black", "Purple", "Purple", "Black", "Blue", "Black", "Green", "Green", "Green", "Red", "Red", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Blue", "Black", "Blue", "Blue", "Black", "Black", "Purple", "Purple", "Purple", "Blue", "Purple", "Black", "Black", "Purple", "Black", "Black", "Black", "Black", "Green", "Green", "Green", "Green", "Red", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Blue", "Black", "Black", "Blue", "Blue", "Purple", "Blue", "Black", "Black", "Black", "Black", "Purple", "Black", "Black", "Black", "Blue", "Blue", "Black", "Purple", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Cyan", "Black", "Blue", "Black", "Blue", "Purple", "Purple", "Purple", "Black", "Black", "Black", "Black", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Purple", "Purple", "Green", "Green", "Green", "Green", "Green", "Green", "Cyan", "Green", "Green", "Green", "Green", "Green", "Green", "Blue", "Blue", "Blue", "Purple", "Purple", "Black", "Black", "Purple", "Purple", "Black", "Black", "Purple", "Purple", "Purple", "Purple", "Purple", "Purple", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Black", "Black", "Purple", "Black", "Black", "Purple", "Black", "Black", "Black", "Purple", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Blue", "Blue", "Black", "Blue", "Purple", "Purple", "Black", "Black", "Purple", "Purple", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Blue", "Blue", "Blue", "Blue", "Blue", "Purple", "Purple", "Purple", "Purple", "Purple", "Yellow", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "White", "White", "Yellow", "Green", "Green", "Green", "Green", "Black", "Black", "Black", "Green", "Yellow", "Green", "Yellow", "Green", "Yellow", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Blue", "Yellow", "Green", "Yellow", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Cyan", "Yellow", "Green", "Blue", "Black", "Green", "Green", "Yellow", "Green", "Yellow", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Black", "Black", "Yellow", "Green", "Yellow", "Green", "Yellow", "Green", "Yellow", "Green", "Yellow", "Green", "Yellow", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Green", "Cyan", "Green", "Green", "Green", "Green", "Green", "Blue", "Blue", "Blue", "Black", "Black", "Blue", "Black", "Black", "Blue", "Black", "Black", "Blue", "Blue", "Black", "Blue", "Black", "Blue", "Black", "Blue", "Black", "Blue", "Black", "Blue", "Black", "Blue", "Black", "Blue", "Blue", "Black", "Black", "Blue", "Black", "Black"]
    let tokenId = document.getElementById("tokenIdInput").value
    let target = TARGET_COLORS[tokenId-1]
    document.getElementById("selectedColor").value = COLORS[target]
    console.log(tokenId, target)

}

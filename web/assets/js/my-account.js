async function loadFatures() {

    const response = await fetch(
            "LoadFatures"
            );

    if (response.ok) {
        const json = await response.json();

        const categorylist = json.categorylist;
        const modellist = json.modellist;
        const colorlist = json.colorlist;
        const storagelist = json.storagelist;
        const productConditionlist = json.productConditionlist;

        loadSelect("categorySelect",categorylist,["id","name"]);
        loadSelect("modelSelect",modellist,["id","name"]);
        loadSelect("storageSelect",storagelist,["id","value"]);
        loadSelect("colorSelect",colorlist,["id","name"]);
        loadSelect("conditionSelect",productConditionlist,["id","name"]);

    } else {
        document.getElementById("message").innerHTML = "Please try again Later ";
    }

}

function loadSelect(selectTagId, list, propertyArray) {

    const SelectTag = document.getElementById(selectTagId);
    list.forEach(item => {
        let optionTag = document.createElement("option");
        optionTag.value = item[propertyArray[0]];
        optionTag.innerHTML = item[propertyArray[1]];
        SelectTag.appendChild(optionTag);
    });

}
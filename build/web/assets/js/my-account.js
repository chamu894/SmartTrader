var modellist;

async function loadFatures() {

    const response = await fetch(
            "LoadFatures"
            );

    if (response.ok) {
        const json = await response.json();

        const categorylist = json.categorylist;
        modellist = json.modellist;
        const colorlist = json.colorlist;
        const storagelist = json.storagelist;
        const productConditionlist = json.productConditionlist;

        loadSelect("categorySelect", categorylist, "name");
//        loadSelect("modelSelect", modellist, "name");
        loadSelect("storageSelect", storagelist, "value");
        loadSelect("colorSelect", colorlist, "name");
        loadSelect("conditionSelect", productConditionlist, "name");

    } else {
        document.getElementById("message").innerHTML = "Please try again Later ";
    }

}

function loadSelect(selectTagId, list, property) {

    const SelectTag = document.getElementById(selectTagId);
    list.forEach(item => {
        let optionTag = document.createElement("option");
        optionTag.value = item.id;
        optionTag.innerHTML = item[property];
        SelectTag.appendChild(optionTag);
    });

}

function updateModels() {

    let modelSelectTag = document.getElementById("modelSelect");
    modelSelectTag.length = 1;

    let selectCategoryId = document.getElementById("categorySelect").value;

    modellist.forEach(model => {
        if (model.category.id == selectCategoryId) {
            let optionTag = document.createElement("option");
            optionTag.value = model.id;
            optionTag.innerHTML = model.name;
            modelSelectTag.appendChild(optionTag);
        }
    });


}
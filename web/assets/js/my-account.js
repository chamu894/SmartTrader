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

        loadSelect("categorySelect",categorylist);
        loadSelect("modelSelect",modellist);

    } else {
        document.getElementById("message").innerHTML = "Please try again Later ";
    }

}

function loadSelect(selectTagId, list) {

    const SelectTag = document.getElementById(selectTagId);
    list.forEach(item => {
        let optionTag = document.createElement("option");
        optionTag.value = item.id;
        optionTag.innerHTML = item.name;
        SelectTag.appendChild(optionTag);
    });

}
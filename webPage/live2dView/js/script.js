var cover = document.getElementById('cover');
    window.onload = function(){
        cover.style.visibility = 'hidden'
    }
    loadModel(0)
    var models = ["lafei_4","aidang_2","aierdeliqi_4","aierdeliqi_5","aimierbeierding_2","aimierbeierding_3","aisaikesi_4","baerdimo_5","banrenma_2","beierfasite_2","biaoqiang","biaoqiang_3","bisimai_2","chuixue_3","dafeng_2","dafeng_4","deyizhi_3","dujiaoshou_4","dujiaoshou_6","dunkeerke_2","edu_3","genaisennao_2","heitaizi_2","hemin_2","hemin_3","huangjiafangzhou_3","huonululu_3","huonululu_5","junhe_5","jianye_2","kelifulan_3","kubo_2","lafei","lingbo","lingbo_10","lisailiu_2","longfeng_2","luyijiushi_2","mingshi","nengdai_2","ninghai_4","ouruola_4","pinghai_4","pinghai_6","qibolin_2","rangbaer_3","shengluyisi_2","shengluyisi_3","shengluyisi_4","sipeibojue_5","taiyuan_2","tianlangxing_3","tierbici_2","weiyan_2","wuqi_2","xianghe_2","xixuegui_4","xuefeng","xuefeng_3","xukufu_2","xukufu_3","yichui_2","z23","z46_2","z46_3","z46_4","zhala_2"]
    var models_name = models[0];
    var models_id = 0;
    var list = document.getElementById('list_ul');
    models.forEach(function(item,i) {
        var li = document.createElement('li');
        li.innerHTML = '<a href="javascript:void(0)">'+ item +'</a>';
        li.value = i;
        list.appendChild(li);
    })
    var lis = list.getElementsByTagName('li');
    var select = document.getElementById('text');
    var select_box = document.getElementById('select');
    var model_list = document.getElementById('list');
    var up = document.getElementById('model-up')
    select_box.onmouseover = function() {
        model_list.style.opacity = '1'
        model_list.style.visibility = 'visible'
        up.style.transform = 'rotate(180deg)'
    }
    select_box.onmouseleave = function() {
        model_list.style.opacity = '0'
        model_list.style.visibility = 'hidden'
        select.innerHTML = models_name
        up.style.transform = 'rotate(0)'
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].value === models_id) {
                list.scrollTop = lis[i].offsetTop - 10
            }
        }
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function(){
            select.innerHTML = models[this.value];
            select.style.color = 'white'
        }
        lis[i].onclick = function() {
            model_list.style.opacity = '0'
            model_list.style.visibility = 'hidden'
            loadModel(this.value)
            models_name = models[this.value]
            models_id = this.value
        }
    }
document.getElementById('btn_home').onclick = function() {
    window.location.replace('https://www.eurekady.com')
}
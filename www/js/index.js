// 年月の基準点一覧表（1951年～2010年）配列の0番目は1951年から開始される。
const BASE_POINT_TABLE = [
    [37,8,36,7,37,8,38,9,40,10,41,11,],
    [42,13,42,13,43,14,44,15,46,16,47,17,],
    [48,19,47,18,48,19,49,20,51,21,52,22,],
    [53,24,52,23,53,24,54,25,56,26,57,27,],
    [58,29,57,28,58,29,59,30,1,31,2,32,],
    [3,34,3,34,4,35,5,36,7,37,8,38,],
    [9,40,8,39,9,40,10,41,12,42,13,43,],
    [14,45,13,44,14,45,15,46,17,47,18,48,],
    [19,50,18,49,19,50,20,51,22,52,23,53,],
    [24,55,24,55,25,56,26,57,28,58,29,59,],
    [30,1,29,0,30,1,31,2,33,3,34,4,],
    [35,6,34,5,35,6,36,7,38,8,39,9,],
    [40,11,39,10,40,11,41,12,43,13,44,14,],
    [45,16,45,16,46,17,47,18,49,19,50,20,],
    [51,22,50,21,51,22,52,23,54,24,55,25,],
    [56,27,55,26,56,27,57,28,59,29,0,30,],
    [1,32,0,31,1,32,2,33,4,34,5,35,],
    [6,37,6,37,7,38,8,39,10,40,11,41,],
    [12,43,11,42,12,43,13,44,15,45,16,46,],
    [17,48,16,47,17,48,18,49,20,50,21,51,],
    [22,53,21,52,22,53,23,54,25,55,26,56,],
    [27,58,27,58,28,59,29,0,31,1,32,2,],
    [33,4,32,3,33,4,34,5,36,6,37,7,],
    [38,9,37,8,38,9,39,10,41,11,42,12,],
    [43,14,42,13,43,14,44,15,46,16,47,17,],
    [48,19,48,19,49,20,50,21,52,22,53,23,],
    [54,25,53,24,54,25,55,26,57,27,58,28,],
    [59,30,58,29,59,30,0,31,2,32,3,33,],
    [4,35,3,34,4,35,5,36,7,37,8,38,],
    [9,40,9,40,10,41,11,42,13,43,14,44,],
    [15,46,14,45,15,46,16,47,18,48,19,49,],
    [20,51,19,50,20,51,21,52,23,53,24,54,],
    [25,56,24,55,25,56,26,57,28,58,29,59,],
    [30,1,30,1,31,2,32,3,34,4,35,5,],
    [36,7,35,6,36,7,37,8,39,9,40,10,],
    [41,12,40,11,41,12,42,13,44,14,45,15,],
    [46,17,45,16,46,17,47,18,49,19,50,20,],
    [51,22,51,22,52,23,53,24,55,25,56,26,],
    [57,28,56,27,57,28,58,29,0,30,1,31,],
    [2,33,1,32,2,33,3,34,5,35,6,36,],
    [7,38,6,37,7,38,8,39,10,40,11,41,],
    [12,43,12,43,13,44,14,45,16,46,17,47,],
    [18,49,17,48,18,49,19,50,21,51,22,52,],
    [23,54,22,53,23,54,24,55,26,56,27,57,],
    [28,59,27,58,28,59,29,0,31,1,32,2,],
    [33,4,33,4,34,5,35,6,37,7,38,8,],
    [39,10,38,9,39,10,40,11,42,12,43,13,],
    [44,15,43,14,44,15,45,16,47,17,48,18,],
    [49,20,48,19,49,20,50,21,52,22,53,23,],
    [54,25,54,25,55,26,56,27,58,28,59,29,],
    [0,31,59,30,0,31,1,32,3,33,4,34,],
    [5,36,4,35,5,36,6,37,8,38,9,39,],
    [10,41,9,40,10,41,11,42,13,43,14,44,],
    [15,46,15,46,16,47,17,48,19,49,20,50,],
    [21,52,20,51,21,52,22,53,24,54,25,55,],
    [26,57,25,56,26,57,27,58,29,59,30,60,],
    [31,2,30,1,31,2,32,3,34,4,35,5,],
    [36,7,36,7,37,8,38,9,40,10,41,11,],
    [42,13,41,12,42,13,43,14,45,15,46,16,],
    [47,18,46,17,47,18,48,19,50,20,51,21,],
];

// 動物名一覧表
const ANIMAL_NAME_TABLE = ["長距離ランナーのチーター","社交家のたぬき","落ち着きのない猿","フットワークの軽い子守熊","面倒見のいい黒ひょう","愛情あふれる虎","全力疾走するチータ","磨き上げられたたぬき","大きな志をもった猿","母性豊かな子守熊","正直なこじか","人気者のゾウ","ネアカの狼","協調性のないひつじ","どっしりした猿","子守熊の中の子守熊","強い意志をもったこじか","デリケートなゾウ","放浪の狼","もの静かなひつじ","落ち着きのあるペガサス","強靭な翼をもつペガサス","無邪気なひつじ","クリエイティブな狼","穏やかな狼","ねばり強いひつじ","波乱に満ちたペガサス","優雅なペガサス","チャレンジ精神の旺盛なひつじ","順応性のある狼","リーダーとなるゾウ","しっかり者のこじか","活動的な子守熊","気分屋の猿","頼られるとうれしいひつじ","好感のもたれる狼","まっしぐらに突き進むゾウ","華やかなこじか","夢とロマンの子守熊","尽くす猿","大器晩成のたぬき","足腰の弱いチータ","動きまわる虎","情熱的な黒ひょう","サービス精神旺盛な子守熊","守りの猿","人間味あふれるたぬき","品格のあるチータ","ゆったりとした悠然の虎","落ちこみの激しい黒ひょう","我が道を行くライオン","統率力のあるライオン","表情豊かな黒ひょう","楽天的な虎","パワフルな虎","気どらない黒ひょう","感情的なライオン","傷つきやすいライオン","束縛をきらう黒ひょう","慈悲深い虎"];

// グループ周期表
const GROUP_PERIOD = [5,8,7,0,9,2,1,4,3,6];

// 正行運周期表
const REGULAR_LUCK_PERIOD = [0,3,6,5,2,4,1,8,9,7];

// 逆行運周期表
const REVERSE_LUCK_PERIOD = [0,7,6,3,2,5,1,4,9,8];

// 運気名一覧表
const LUCK_NAME = ["完結","焦燥","浪費","整理","調整","活動","学習","転換","投資","成果"];

// 運気名一覧の解説
const LUCK_NAME_EXPLAIN = [
    "何事に対しても良心に従った正しい判断ができるトキです。出世や栄転、新しいビジネスチャンスが舞い込み、プライベートにもビジネスにも最も安定した時期です。社会的に発展すると同時に、異性との出会いも多く、結婚運は申し分ありません。",
    "知性と感性が研ぎ澄まされ敏感になっていますので、些細な事でいらいらしたり、我慢できなくなるトキです。人間関係のトラブルが避けられなくなりますので、事故や怪我に注意して、おおらかな気持ちで人と接するように心がけましょう。",
    "何となく体調もすぐれず、気力も衰えているトキです。無理せず、体カを温存しておきましょう。この時期はお金に関しても注意が必要です。出費がかさみ、家計を圧迫してしまいます。お金の貸し借りも極力避け、金銭トラブルを回避しましょう。",
    "物事の判断基準が曖昧になり、気分的にもすっきりしないトキです。動き回る時期ではないので、長期的展望に立ち、決して慌てたり、焦ってはいけません。身辺整理の意味でも、不要な人間関係を断ち切る絶好のチャンスでもあります。",
    "精神的にも安定していて、心に余裕があるので、将来への見通しも明るいトキです。煩わしい人間関係から解放され、物事がスムーズに運ぶ時期です。体調も良く、人の和や組織のハーモニーが整い、とても穏やかな気持ちで過ごせます。",
    "体調もよくなり、気力も充実しているトキです。この時期は何事にも積極的に出て、自分の考えや気持ちを前面に出していきましょう。新たな事をスタートさせるには最良のタイミングです感謝の気持ちを忘れずに行動すればうまくいきます。",
    "今まですっきりしなかった頭が、霧が晴れたように明晰になり、心身共に明るくなるトキです。何事も吸収し、学ぶ姿勢を大切に努力することで、良好な人間関係を維持することができます。勉強や受験などはもちろん、良縁にも恵まれるでしょう。",
    "とにかく動きの激しいトキで、新規事業に取り組むといいでしょう。今までの方針を変えて自分を取り巻く環境から舟び出したい時期で、外に目が向きがちです。思い切ってイメージチェンジすることで、大きなチャンスを手にすることができます。",
    "自外から積極的に働きかけて物事が成就するトキです。人間関係も極めて良好な時期なので、様々な新しい出会いがあります。お金も貯めるよりは投資に回しましょう。目の前の好機を逃さないよう、常に外に目を向け情報に耳を傾けて下さい。",
    "全ての物事が順調に発展するトキです。この時期は積極的な行動に出て無理してでも自分を前面に押し出していきましょう。金銭的にも物質的にも共に良好で、計画していたことが次々と実現するでしょう。特に金運、ビジネス運が最高です。"
];

//誕生日配列の年月日
const YYYY = 0;
const MM = 1;
const DD =2;

document.addEventListener('init', function(event) {
    var page = event.target;
    if (page.matches('#redirect')) {
        var chkAnimalName = localStorage.getItem('animalName');
        if(chkAnimalName){
            //2回目以降遷移時
            document.querySelector('#navigator').resetToPage('page2.html',{ animation: "none" });
            // 通常遷移時（アプリ初回起動時以外）の前画面を読込
            document.querySelector('#navigator').insertPage(0,'page1.html');
        } else {
            //初回遷移時
            document.querySelector('#navigator').resetToPage('page1.html',{ animation: "none" });
        }
    } else if (page.matches('#first-page')) {
        // 診断画面：初期表示処理
        page.querySelector('#push-button').onclick = function() {
            // 診断画面：診断ボタン押下時処理
            var birthDay = $("#birthDay").val();
            // 日付未入力チェック
            if(!birthDay){
                ons.notification.alert({message: '誕生日が選択されていません。',title: 'エラー'});
                return 0;
            }
            var aryBirthDay = birthDay.split("-");
            var birthDayYear = parseInt(aryBirthDay[YYYY]);
            var birthDayMonth = parseInt(aryBirthDay[MM]);
            var birthDayDay = parseInt(aryBirthDay[DD]);
            // 日付範囲チェック
            if (birthDayYear < 1951 || 2010 < birthDayYear){
                ons.notification.alert({message: '大変申し訳ありません。誕生日は1951～2010年までしか対応しておりません。',title: 'エラー'});
                return 0;
            }
            // 生年月日の年、月より動物コードを取得
            var animalCode = BASE_POINT_TABLE[birthDayYear - 1951][birthDayMonth - 1] + parseInt(aryBirthDay[DD]);
            // 動物コードが61を超える場合は60を引く
            if (60 < animalCode){
                animalCode = animalCode - 60;
            }
            // 動物名を取得
            var animalName = ANIMAL_NAME_TABLE[animalCode-1];
            localStorage.setItem('animalCode', animalCode);
            localStorage.setItem('animalName', animalName);
            document.querySelector('#navigator').pushPage('page2.html');
        };

    } else if (page.matches('#second-page')) {
        // 結果画面：初期表示処理
        var animalCode = localStorage.getItem('animalCode');
        var animalName = localStorage.getItem('animalName');
        // ======================
        // 今日の運勢を算出する
        // ======================
        var diffDay = getDiff();
        var period = GROUP_PERIOD[animalCode%10];
        var periodDiffDay = diffDay%10 - period;
        if(periodDiffDay < 0){
            periodDiffDay = periodDiffDay + 10;
        }
        // 正行運、逆行運で周期が異なるためそれに応じた今日の運気を取得する。
        var todayLuckCode = 0;
        if(parseInt(animalCode)%2 === 1){
            //奇数：正行運
            todayLuckCode = REGULAR_LUCK_PERIOD[parseInt(periodDiffDay)];
        } else {
            //偶数：逆行運
            todayLuckCode = REVERSE_LUCK_PERIOD[parseInt(periodDiffDay)];            
        }
        var luckName = LUCK_NAME[todayLuckCode];
        var luckNameExplain = LUCK_NAME_EXPLAIN[todayLuckCode];
        var luckPoint = todayLuckCode*10;
        if(luckPoint === 0){
            // 0に該当する場合は成果なので100点に変更
            luckPoint = 100;
        }
        // 動物の画像設定
        var imageName = '';
        if ( animalName.match('ゾウ')) {
            imageName = 'zou.jpg';
        } else if (animalName.match('虎')) {
            imageName = 'tora.gif';
        } else if (animalName.match('たぬき')) {
            imageName = 'tanuki.gif';
        } else if (animalName.match('猿')) {
            imageName = 'saru.gif';
        } else if (animalName.match('ライオン')) {
            imageName = 'raion.gif';
        } else if (animalName.match('ペガサス')) {
            imageName = 'pegasasu.gif';
        } else if (animalName.match('狼')) {
            imageName = 'ookami.gif';
        } else if (animalName.match('黒ひょう')) {
            imageName = 'kurohyo.png';
        } else if (animalName.match('こじか')) {
            imageName = 'kozika.gif';
        } else if (animalName.match('子守熊')) {
            imageName = 'koara.gif';
        } else if (animalName.match('ひつじ')) {
            imageName = 'hituzi.gif';
        } else if (animalName.match('チーター')) {
            imageName = 'cheta.jpg';
        } 
        // ======================
        // 　　画面表示設定
        // ======================
        $("#yourAinmal").text('あなたは' + animalName + 'です');
        $("#animalPicture").attr('src', 'img/' + imageName);
        $("#todayLuck").text('今日の運気は' + luckName + '(' + luckPoint +'点)です');
        $("#luckNameExplain").text(luckNameExplain);
    }
});

/*
 *日付の差分日数を返却します。
 */
function getDiff() {
    var date1 = new Date("2018/01/01 00:00:00");
    var date2 = new Date();
	// getTimeメソッドで経過ミリ秒を取得し、２つの日付の差を求める
	var msDiff = date2.getTime() - date1.getTime();
 
	// 求めた差分（ミリ秒）を日付へ変換します（経過ミリ秒÷(1000ミリ秒×60秒×60分×24時間)。端数切り捨て）
	var daysDiff = Math.floor(msDiff / (1000 * 60 * 60 *24));

    return daysDiff;
}

// =====================
//  全画面共通イベント
// =====================

// 全画面共通イベント用変数
var commonEvent = {};
commonEvent.backgroundTime;

/** 
 * バックグラウンド移動時（アプリ終了）
 */
document.addEventListener("pause", function() {
   commonEvent.backgroundTime = new Date();
}, false);

/** 
 * フォアグラウンド移動時（アプリ再起動）
 */
document.addEventListener("resume", function(){
    var nowTime = new Date();
     if (1000 <= nowTime - commonEvent.backgroundTime) {
        // 1秒以上バックグラウンドに回った場合
        var chkAnimalName = localStorage.getItem('animalName');
        if(chkAnimalName){
            //2回目以降遷移時
            document.querySelector('#navigator').resetToPage('page2.html',{ animation: "none" });
            // 通常遷移時（アプリ初回起動時以外）の前画面を読込
            document.querySelector('#navigator').insertPage(0,'page1.html');
        } else {
            //初回遷移時
            document.querySelector('#navigator').resetToPage('page1.html',{ animation: "none" });
        }
    }
}, false);
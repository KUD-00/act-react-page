const inquiry = {
    "inquiry": {
        "inquiry_id": "17070",
        "base_ver_id": null,
        "bot_id": "17",
        "inquiry_name": "【テスト】お客様の声フォーム",
        "inquiry_type_cd": "000",
        "inquiry_status_cd": "01",
        "support_lang_cd": "ja",
        "class_cd": "01",
        "inquiry_cd": "17070",
        "scene_cd": "",
        "label_id": null,
        "secret_mode": "0",
        "password": "",
        "template_cd": "",
        "entry_count": "10",
        "duration": "5",
        "inquiry_data": {
            "cancelable": "0",
            "cancel_policy": []
        },
        "start_date": null,
        "end_date": null,
        "present": null,
        "redirect_url": "",
        "mail_member_flg": "0",
        "mail_user_flg": "0",
        "mail_users": "",
        "member_mail_template": "",
        "member_mail_from": "",
        "user_mail_template": "",
        "user_in_charge": null,
        "support_flg": "0",
        "faq_scene": "",
        "delete_flg": "0",
        "upd_user": "1216",
        "upd_time": "2022-08-21 14:37:19"
    },
    "description": {
        "title": "【テスト】お客様の声フォーム",
        "image": [],
        "confirm_info": null,
        "complete_info": null,
        "input_info": [{
            "title": "",
            "description": "説明内容\nあああああああああああえええええええええいいいいいいおおおおおおうう",
            "fold": "show"
        }]
    },
    "entry": [{
        "no": "1",
        "lang_cd": "ja",
        "label_no": null,
        "title": "ご意見のある施設をお選びください。",
        "tag": "",
        "tag_label": "",
        "title_description": "<p>タイトルの説明はです。<br/>２行目<br/>sdfd<br/>sdふぁ<br/>３行目<\/p>",
        "placeholder": "",
        "description": "",
        "entry_type_cd": "opt",
        "required": "1",
        "input_rules": [],
        "next_page": "0",
        "actions": "",
        "entry_data": ["アルバ", "ALTA", "水族館", "NAMJATOWN（ガシャポンのデパート池袋総本店・一番くじ公式ショップを含む）", "コニカミノルタプラネタリウム満天", "サンシャイン劇場", "古代オリエント博物館", "噴水広場", "展示ホール", "会議室", "駐車場", "その他"],
        "section_no": "1"
    }, {
        "no": "2",
        "lang_cd": "ja",
        "label_no": null,
        "title": "いつのできごとでしたか？",
        "tag": "",
        "tag_label": "",
        "title_description": "<p>いつのできごとでしたか？<\/p><p><span style=\"font-weight: 400;\">asdfa<\/span><\/p>",
        "placeholder": "○月○日　〇〇：〇〇ごろ",
        "description": "",
        "entry_type_cd": "txt",
        "required": "0",
        "input_rules": {
            "type": "text",
            "regex": "\"\"",
            "minute_span": "",
            "min_length": "",
            "max_length": "",
            "num_min": "",
            "num_max": "",
            "confirm": "",
            "range": "",
            "periods": [{
                "start_date": "",
                "end_date": "",
                "span": "",
                "weekday": [],
                "holiday": "",
                "excludedDates": [],
                "mode": "",
                "limit": "",
                "start_time": "",
                "end_time": "",
                "excluded_times": [{
                    "start_time": "",
                    "end_time": ""
                }],
                "display_mode": ""
            }]
        },
        "next_page": "0",
        "actions": "",
        "entry_data": [],
        "section_no": "1"
    }, {
        "no": "3",
        "lang_cd": "ja",
        "label_no": null,
        "title": "スタッフの名前はお分かりですか？",
        "tag": "",
        "tag_label": "",
        "title_description": "",
        "placeholder": "例：池袋太郎",
        "description": "",
        "entry_type_cd": "txt",
        "required": "0",
        "input_rules": {
            "type": "text",
            "regex": "\"\"",
            "minute_span": "",
            "min_length": "",
            "max_length": "",
            "num_min": "",
            "num_max": "",
            "confirm": "",
            "range": "",
            "periods": [{
                "start_date": "",
                "end_date": "",
                "span": "",
                "weekday": [],
                "holiday": "",
                "excludedDates": [],
                "mode": "",
                "limit": "",
                "start_time": "",
                "end_time": "",
                "excluded_times": [{
                    "start_time": "",
                    "end_time": ""
                }],
                "display_mode": ""
            }]
        },
        "next_page": "0",
        "actions": "",
        "entry_data": [],
        "section_no": "1"
    }, {
        "no": "4",
        "lang_cd": "ja",
        "label_no": null,
        "title": "ご意見種類",
        "tag": "",
        "tag_label": "",
        "title_description": "",
        "placeholder": "",
        "description": "",
        "entry_type_cd": "opt",
        "required": "1",
        "input_rules": [],
        "next_page": "0",
        "actions": "",
        "entry_data": ["おほめ", "おしかり・ご意見", "お問合せ・ご要望"],
        "section_no": "1"
    }, {
        "no": "5",
        "lang_cd": "ja",
        "label_no": null,
        "title": "ご意見内容",
        "tag": "",
        "tag_label": "",
        "title_description": "",
        "placeholder": "※文字化け防止のため、丸文字・特殊文字・絵文字のご使用はご遠慮ください。",
        "description": "",
        "entry_type_cd": "txa",
        "required": "1",
        "input_rules": [],
        "next_page": "0",
        "actions": "",
        "entry_data": [],
        "section_no": "1"
    }, {
        "no": "6",
        "lang_cd": "ja",
        "label_no": null,
        "title": "お名前",
        "tag": "",
        "tag_label": "",
        "title_description": "",
        "placeholder": "",
        "description": "",
        "entry_type_cd": "spl",
        "required": "0",
        "input_rules": {
            "type": "name_full",
            "regex": "",
            "min_length": "",
            "max_length": "",
            "full_name": {
                "label": "名前",
                "placeholder": "山田 太郎"
            },
            "furigana": {
                "label": "フリガナ",
                "placeholder": "ヤマダ タロウ"
            }
        },
        "next_page": "0",
        "actions": "",
        "entry_data": [],
        "section_no": "1"
    }, {
        "no": "7",
        "lang_cd": "ja",
        "label_no": null,
        "title": "年齢",
        "tag": "",
        "tag_label": "",
        "title_description": "",
        "placeholder": "〇〇歳",
        "description": "",
        "entry_type_cd": "txt",
        "required": "0",
        "input_rules": {
            "type": "number",
            "regex": "\"d\"",
            "minute_span": "",
            "min_length": "",
            "max_length": "",
            "num_min": "",
            "num_max": "",
            "confirm": "",
            "range": false,
            "periods": [{
                "start_date": "",
                "end_date": "",
                "span": "",
                "weekday": [],
                "holiday": "",
                "excludedDates": [],
                "mode": "",
                "limit": "",
                "start_time": "",
                "end_time": "",
                "excluded_times": [{
                    "start_time": "",
                    "end_time": ""
                }],
                "display_mode": ""
            }]
        },
        "next_page": "0",
        "actions": "",
        "entry_data": [],
        "section_no": "1"
    }, {
        "no": "8",
        "lang_cd": "ja",
        "label_no": null,
        "title": "性別",
        "tag": "",
        "tag_label": "",
        "title_description": "",
        "placeholder": "",
        "description": "",
        "entry_type_cd": "opt",
        "required": "0",
        "input_rules": [],
        "next_page": "0",
        "actions": "",
        "entry_data": ["男", "女", "その他"],
        "section_no": "1"
    }, {
        "no": "9",
        "lang_cd": "ja",
        "label_no": null,
        "title": "メールアドレス",
        "tag": "",
        "tag_label": "",
        "title_description": "",
        "placeholder": "",
        "description": "",
        "entry_type_cd": "txt",
        "required": "0",
        "input_rules": {
            "type": "mail",
            "regex": "\"^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+$\"",
            "minute_span": "",
            "min_length": "",
            "max_length": "",
            "num_min": "",
            "num_max": "",
            "confirm": false,
            "range": "",
            "periods": [{
                "start_date": "",
                "end_date": "",
                "span": "",
                "weekday": [],
                "holiday": "",
                "excludedDates": [],
                "mode": "",
                "limit": "",
                "start_time": "",
                "end_time": "",
                "excluded_times": [{
                    "start_time": "",
                    "end_time": ""
                }],
                "display_mode": ""
            }]
        },
        "next_page": "0",
        "actions": "",
        "entry_data": [],
        "section_no": "1"
    }, {
        "no": "10",
        "lang_cd": "ja",
        "label_no": null,
        "title": "<h3 class=\"title_on_table_h\" style=\"font-family: &quot;ヒラギノ角ゴ Pro W3&quot;, &quot;Hiragino Kaku Gothic Pro&quot;, メイリオ, Meiryo, &quot;ＭＳ Ｐゴシック&quot;, sans-serif; color: rgb(0, 0, 0); margin-bottom: unset; white-space: normal;\">☆推薦者様情報入力欄<\/h3><p><span style=\"color: rgb(0, 0, 0); font-family: &quot;ヒラギノ角ゴ Pro W3&quot;, &quot;Hiragino Kaku Gothic Pro&quot;, メイリオ, Meiryo, &quot;ＭＳ Ｐゴシック&quot;, sans-serif; font-size: 14px; white-space: normal; font-weight: 400;\">※いただきました個人情報につきまして、弊社「<\/span><a href=\"http:\/\/www.sunshinecity.co.jp\/information\/policy.html\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); font-family: &quot;ヒラギノ角ゴ Pro W3&quot;, &quot;Hiragino Kaku Gothic Pro&quot;, メイリオ, Meiryo, &quot;ＭＳ Ｐゴシック&quot;, sans-serif; font-size: 14px; white-space: normal;\">個人情報保護方針<\/a><span style=\"color: rgb(0, 0, 0); font-family: &quot;ヒラギノ角ゴ Pro W3&quot;, &quot;Hiragino Kaku Gothic Pro&quot;, メイリオ, Meiryo, &quot;ＭＳ Ｐゴシック&quot;, sans-serif; font-size: 14px; white-space: normal; font-weight: 400;\">」に基づき適切に管理いたします。<\/span><\/p><p><br><\/p><p>名前（任意）<\/p>",
        "tag": "",
        "tag_label": "",
        "title_description": "",
        "placeholder": "例：池袋太郎",
        "description": "",
        "entry_type_cd": "txt",
        "required": "0",
        "input_rules": {
            "type": "text",
            "regex": "\"\"",
            "minute_span": "",
            "min_length": "",
            "max_length": "",
            "num_min": "",
            "num_max": "",
            "confirm": "",
            "range": "",
            "periods": [{
                "start_date": "",
                "end_date": "",
                "span": "",
                "weekday": [],
                "holiday": "",
                "excludedDates": [],
                "mode": "",
                "limit": "",
                "start_time": "",
                "end_time": "",
                "excluded_times": [{
                    "start_time": "",
                    "end_time": ""
                }],
                "display_mode": ""
            }]
        },
        "next_page": "0",
        "actions": "",
        "entry_data": [],
        "section_no": "2"
    }],
    "branch": []
};

exports.inquiry_data = inquiry
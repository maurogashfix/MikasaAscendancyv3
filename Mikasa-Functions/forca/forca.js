const _0x567347=_0x418b;(function(_0x4d3024,_0x3ff404){const _0x5d67a2=_0x418b,_0x32baf0=_0x4d3024();while(!![]){try{const _0x49005c=-parseInt(_0x5d67a2(0x12e))/0x1*(parseInt(_0x5d67a2(0x15f))/0x2)+parseInt(_0x5d67a2(0x13d))/0x3+-parseInt(_0x5d67a2(0x11b))/0x4*(-parseInt(_0x5d67a2(0x115))/0x5)+parseInt(_0x5d67a2(0x127))/0x6*(-parseInt(_0x5d67a2(0x14a))/0x7)+-parseInt(_0x5d67a2(0x147))/0x8+parseInt(_0x5d67a2(0x128))/0x9+parseInt(_0x5d67a2(0x135))/0xa;if(_0x49005c===_0x3ff404)break;else _0x32baf0['push'](_0x32baf0['shift']());}catch(_0x428483){_0x32baf0['push'](_0x32baf0['shift']());}}}(_0x59c2,0x606d5));const fs=require('fs'),sleep=async _0x346d44=>{return new Promise(_0x9f0623=>setTimeout(_0x9f0623,_0x346d44));},moment=require(_0x567347(0x140)),isJsonIncludes=(_0x5e5b49,_0x5b07eb)=>{const _0x565684=_0x567347;if(JSON[_0x565684(0x11c)](_0x5e5b49)[_0x565684(0x114)](_0x5b07eb))return!![];return![];};function saveJSON(_0xb47906,_0x1668b7){const _0x48fa1b=_0x567347;fs[_0x48fa1b(0x15d)](_0x1668b7,JSON[_0x48fa1b(0x11c)](_0xb47906,null,0x2));}const alerandom=_0x1dc2ad=>{const _0x357602=_0x567347;return Math[_0x357602(0x10c)](Math[_0x357602(0x12c)]()*_0x1dc2ad);},rmLetras=_0x37f3a8=>{const _0x3c1a26=_0x567347;return _0x37f3a8[_0x3c1a26(0x13e)]()['normalize']('NFD')[_0x3c1a26(0x11a)](/[\u0300-\u036f]/g,'');},iniMai=_0x512ce6=>{const _0x21a157=_0x567347;return txt=_0x512ce6[_0x21a157(0x151)]()[_0x21a157(0x14e)](0x0,0x1)+_0x512ce6[_0x21a157(0x14e)](0x1),txt;},contar=(_0x887cce,_0xb286d2)=>{const _0x486f2a=_0x567347;total=0x0;for(i=0x0;i<_0x887cce[_0x486f2a(0x148)];i++){if(_0xb286d2==_0x887cce[i])total+=0x1;}return total;},sendHours=_0x1d7296=>{const _0x9b6134=_0x567347;return moment['tz'](_0x9b6134(0x121))[_0x9b6134(0x150)](_0x1d7296);},shuffle=_0x3bcf4d=>{const _0xbd4f42=_0x567347;palavra=_0x3bcf4d+'\x20',armax=[];for(i=0x0;i<palavra[_0xbd4f42(0x148)];i++){armax[_0xbd4f42(0x15a)]({'letra':palavra[_0xbd4f42(0x12f)](palavra[_0xbd4f42(0x14e)](i+0x1))[0x0][_0xbd4f42(0x14e)](i)});}pross='',total_armax=armax['length'];for(a=0x0;a<total_armax;a++){alex=Math[_0xbd4f42(0x10c)](Math['random']()*armax[_0xbd4f42(0x148)]),pross+=''+armax[alex][_0xbd4f42(0x154)],armax['splice'](alex,0x1);}return pross;},usuariosForcaPath=_0x567347(0x15c);function saveUsuForcaGame(_0x11fffd){saveJSON(_0x11fffd,usuariosForcaPath);}!fs[_0x567347(0x136)](usuariosForcaPath)&&saveUsuForcaGame([]);const usuarios_forca=JSON['parse'](fs[_0x567347(0x153)](usuariosForcaPath));function addUsuarioForca(_0x20b12b){const _0x438cfb=_0x567347;AB=usuarios_forca[_0x438cfb(0x155)](_0x650c76=>_0x650c76['id'])['indexOf'](_0x20b12b),AB<0x0&&(usuarios_forca[_0x438cfb(0x15a)]({'id':_0x20b12b,'dados':{'acertos':0x0,'erros':0x0,'corretor':0x0,'jogos':0x0,'partidas':[]}}),saveUsuForcaGame(usuarios_forca));}function rmUsuarioForca(_0x1cd784){const _0x2b7459=_0x567347;AB=usuarios_forca[_0x2b7459(0x155)](_0xb00768=>_0xb00768['id'])[_0x2b7459(0x116)](_0x1cd784),usuarios_forca[_0x2b7459(0x10f)](AB,0x1),saveUsuForcaGame(usuarios_forca);}function addAcertoUsuForca(_0x51fcb4,_0x59749e){const _0x105577=_0x567347;AB=usuarios_forca['map'](_0x2c19c4=>_0x2c19c4['id'])[_0x105577(0x116)](_0x51fcb4),usuarios_forca[AB]['dados'][_0x105577(0x138)]+=Number(_0x59749e),saveUsuForcaGame(usuarios_forca),usuarios_forca[AB][_0x105577(0x126)][_0x105577(0x134)]>=0x14&&(usuarios_forca[AB][_0x105577(0x126)][_0x105577(0x134)]=0x0,saveUsuForcaGame(usuarios_forca),_0x59749e=usuarios_forca[AB]['dados']['erros']-0x2<0x0?usuarios_forca[AB][_0x105577(0x126)][_0x105577(0x141)]:0x2,usuarios_forca[AB]['dados']-=_0x59749e,saveUsuForcaGame(usuarios_forca));}function addErroUsuForca(_0x3aab8d,_0x4a670e){const _0x96645e=_0x567347;AB=usuarios_forca['map'](_0x39affa=>_0x39affa['id'])[_0x96645e(0x116)](_0x3aab8d),usuarios_forca[AB][_0x96645e(0x126)][_0x96645e(0x141)]+=Number(_0x4a670e),saveUsuForcaGame(usuarios_forca);}function _0x59c2(){const _0x25699b=['join','desc','1707573lxkEnp','toLowerCase','\x0a•\x20Erros:\x20','moment-timezone','erros','•\x20Muito\x20Burro\x20@','./Mikasa-Functions/forca/','unlinkSync','DDMMYYYY','\x0a\x0a—\x0a•\x20Use\x20','6012544nOSevA','length','✋🏼','50204wqgkYu','\x22,\x20Você\x20Acertou,\x20Irei\x20Sortear\x20Novas\x20Palavras',',\x20A\x20Palavra\x20Correta\x20Era\x20\x22','\x09\x09👖','slice','acertou','format','toUpperCase','•\x20Palavra\x20Não\x20Encontrada\x20Ou\x20Inexistente!','readFileSync','letra','map','!\x20Irei\x20Reiniciar\x20O\x20Game,\x20Caso\x20Queira\x20Parar\x20De\x20Jogar\x20Use:\x20','🤚🏼','parse','\x0a—\x0a•\x20Parabéns\x20@','push','\x22\x20Foi\x20Deletado\x20Com\x20Sucesso!','./Mikasa-Functions/forca/usuarios.json','writeFileSync','\x20Você\x20Errou\x20A\x20Letra,\x20Porém\x20Você\x20Ainda\x20Tem\x20','529698NOjDXS','partidas','palavras','\x0a•\x20Ganhos:\x20\x0a','•\x20O\x20Tema\x20\x22','./Mikasa-Functions/forca/palavras.json','floor','letras_acertadas','\x0a—\x0a\x09\x09\x09|\x0a\x0a\x0a\x0a\x0a\x0a','splice','\x0a•\x20Partidas\x20Jogadas:\x20','letras_erradas','\x0a•\x20Dica:\x20',',\x20Você\x20Acertou','includes','73000shhUYY','indexOf','\x0a—\x0a•\x20Acertos\x20Percentuais:\x20','•\x20Você\x20Perdeu\x20@','.json','replace','152mSgwMX','stringify','jogos','words','resultado','nome','America/Sao_Paulo','『\x20FORCA\x20GAME\x20』\x0a\x0a•\x20Tema:\x20','•\x20@',',\x20Você\x20Acertou\x20A\x20Palavra\x20Toda','fc\x20Para\x20Responder','dados','420NtJNRQ','6579162PKwNwh','•\x20Palavra\x20Da\x20Forca\x20Foi\x20Deletada\x20Com\x20Sucesso!','exports','HHmmss','random','toFixed','2jNGUfd','split','\x20Chance','〙0%','\x09👟','letras','corretor','3232620RlvyAg','existsSync','•\x20Tema\x20Da\x20Forca\x20Não\x20Encontrado/Inexistente','acertos','title','『\x20FORCA\x20INICIADA\x20COM\x20SUCESSO\x20』\x0a\x0a•\x20Tema:\x20'];_0x59c2=function(){return _0x25699b;};return _0x59c2();}const existIdForcaGameInUsu=(_0x51cc32,_0x56659a)=>{const _0x3d000a=_0x567347;AB=usuarios_forca[_0x3d000a(0x155)](_0x23e33c=>_0x23e33c['id'])[_0x3d000a(0x116)](_0x51cc32),data=JSON[_0x3d000a(0x158)](fs[_0x3d000a(0x153)]('./Mikasa-Functions/forca/'+_0x56659a+'.json')),nmr=0x0;for(i of usuarios_forca[AB][_0x3d000a(0x126)]['partidas']){if(data['ID']==i['id'])nmr+=0x1;}return nmr>0x0?!![]:![];};function registrarIdNaForca(_0x605bfc,_0x31760e,_0x458ec3,_0x1c2669){const _0x546a2e=_0x567347;addUsuarioForca(_0x605bfc),AB=usuarios_forca[_0x546a2e(0x155)](_0x2de2e0=>_0x2de2e0['id'])['indexOf'](_0x605bfc),usuarios_forca[AB][_0x546a2e(0x126)][_0x546a2e(0x11d)]+=Number(_0x458ec3),saveUsuForcaGame(usuarios_forca),data=JSON[_0x546a2e(0x158)](fs[_0x546a2e(0x153)](_0x546a2e(0x143)+_0x31760e+_0x546a2e(0x119))),AC=usuarios_forca[AB][_0x546a2e(0x126)][_0x546a2e(0x107)][_0x546a2e(0x155)](_0x38e7c8=>_0x38e7c8['id'])['indexOf'](data['ID']),_0x1c2669==0x0&&(AC>=0x0?(usuarios_forca[AB][_0x546a2e(0x126)][_0x546a2e(0x107)][AC][_0x546a2e(0x10d)]+=Number(_0x458ec3),saveUsuForcaGame(usuarios_forca)):(usuarios_forca[AB][_0x546a2e(0x126)]['partidas']['push']({'id':data['ID'],'letras_acertadas':0x1,'letras_erradas':0x0}),saveUsuForcaGame(usuarios_forca))),_0x1c2669==0x1&&(AC>=0x0?(usuarios_forca[AB][_0x546a2e(0x126)]['partidas'][AC][_0x546a2e(0x10d)]+=Number(_0x458ec3),saveUsuForcaGame(usuarios_forca)):(usuarios_forca[AB]['dados'][_0x546a2e(0x107)][_0x546a2e(0x15a)]({'id':data['ID'],'letras_acertadas':0x0,'letras_erradas':0x1}),saveUsuForcaGame(usuarios_forca)));}function addVitoriaForca(_0x59b0a6,_0x5d241f){const _0x498357=_0x567347;addUsuarioForca(_0x59b0a6),AB=usuarios_forca[_0x498357(0x155)](_0x3a530b=>_0x3a530b['id'])[_0x498357(0x116)](_0x59b0a6),usuarios_forca[AB][_0x498357(0x126)][_0x498357(0x138)]+=Number(_0x5d241f),usuarios_forca[AB][_0x498357(0x126)][_0x498357(0x11d)]+=Number(_0x5d241f);}function addDerrotaForca(_0x9be258,_0x27d9bb){const _0x47c193=_0x567347;addUsuarioForca(_0x9be258),AB=usuarios_forca['map'](_0x105a30=>_0x105a30['id'])[_0x47c193(0x116)](_0x9be258),usuarios_forca[AB][_0x47c193(0x126)][_0x47c193(0x141)]+=Number(_0x27d9bb),usuarios_forca[AB][_0x47c193(0x126)][_0x47c193(0x11d)]+=Number(_0x27d9bb);}const getUsuDatabaseForca=(_0x2bc377,_0x35c676)=>{const _0x240fdf=_0x567347;AB=usuarios_forca['map'](_0x48511e=>_0x48511e['id'])[_0x240fdf(0x116)](_0x2bc377),i=usuarios_forca[AB]['dados'],caixa=[],porc=0x0,total=0x0;if(i[_0x240fdf(0x107)]['length']>0x0){for(pt of i[_0x240fdf(0x107)]){porc+=pt['letras_acertadas']/(pt['letras_acertadas']+pt[_0x240fdf(0x111)])*0x64,total+=0x1;}caixa[_0x240fdf(0x15a)](porc/total);}return br=!isNaN(Number(i['acertos']/(i['acertos']+i['erros'])*0x64)[_0x240fdf(0x12d)](0x1))?_0x35c676(i['acertos'],i['acertos']+i['erros']):'〘'+'▒'['repeat'](0xa)+_0x240fdf(0x131),txt='『\x20FORCA\x20-\x20DADOS\x20PESSOAIS\x20』\x20\x0a\x0a•\x20Acertos:\x20'+i[_0x240fdf(0x138)]+_0x240fdf(0x13f)+i[_0x240fdf(0x141)]+_0x240fdf(0x110)+i[_0x240fdf(0x11d)]+_0x240fdf(0x109)+br+_0x240fdf(0x117)+(caixa[_0x240fdf(0x148)]>0x0?Number(caixa[0x0])['toFixed'](0x1):0x0)+'%',txt;},forcaWordPath=_0x567347(0x10b);function saveForcaWord(_0x51e712){saveJSON(_0x51e712,forcaWordPath);}!fs[_0x567347(0x136)](forcaWordPath)&&saveForcaWord([]);const forcaWord=JSON['parse'](fs[_0x567347(0x153)](forcaWordPath)),sendPathForcaGame=_0x1e504a=>{const _0x4dc2db=_0x567347;return forcaWordPath[_0x4dc2db(0x11a)](_0x4dc2db(0x108),_0x1e504a);},existSomeWordForcaGame=forcaWord[_0x567347(0x148)]>0x0?!![]:![],existThemeWordForcaGame=_0x258ef9=>{const _0x2a4f15=_0x567347;if(forcaWord['length']<=0x0)return![];nmr=0x0;for(i of forcaWord){if(rmLetras(_0x258ef9)===rmLetras(i[_0x2a4f15(0x139)]))nmr+=0x1;}return nmr>0x0?!![]:![];},getThemeWordForcaGame=_0x15dd4b=>{caixa=[];for(i of forcaWord){if(rmLetras(_0x15dd4b)===rmLetras(i['title']))caixa['push'](i);}return caixa[0x0];},getRandomWordForcaGame=()=>{const _0x301f42=_0x567347;primeiro=[];for(a of forcaWord){for(b of a['words']){primeiro[_0x301f42(0x15a)]({'title':a[_0x301f42(0x139)],'nome':b[_0x301f42(0x120)],'desc':b[_0x301f42(0x13c)]});}}segundo=[];for(l=0x0;l<primeiro[_0x301f42(0x148)];l++){random=alerandom(primeiro[_0x301f42(0x148)]),segundo['push'](primeiro[random]),primeiro[_0x301f42(0x10f)](random,0x1);}return segundo[alerandom(segundo[_0x301f42(0x148)])];};function rgWordForcaGame(_0x334eaa,_0x5cf69e,_0x418f4c){const _0x3c237b=_0x567347;!existThemeWordForcaGame(_0x334eaa)&&(forcaWord[_0x3c237b(0x15a)]({'title':_0x334eaa,'words':[]}),saveForcaWord(forcaWord)),palavras=getThemeWordForcaGame(_0x334eaa)['words'],palavras['push']({'nome':_0x5cf69e,'desc':_0x418f4c}),saveForcaWord(forcaWord);}function rmThemeForcaGame(_0x1c06f4,_0x387ad2){const _0x306e44=_0x567347;caixa=[],nmr=-0x1;for(i of forcaWord){nmr+=0x1;if(_0x387ad2==i[_0x306e44(0x139)])caixa[_0x306e44(0x15a)](nmr);}if(nmr<0x0)return _0x1c06f4(_0x306e44(0x137));forcaWord[_0x306e44(0x10f)](nmr,0x1),saveForcaWord(forcaWord),_0x1c06f4(_0x306e44(0x10a)+_0x387ad2+_0x306e44(0x15b));}function rmWordForcaGame(_0x33ed26,_0x2cd1d9){const _0x2ebf6d=_0x567347;caixa=[],a1=-0x1;for(a of forcaWord){a1+=0x1,a2=-0x1;for(b of a[_0x2ebf6d(0x11e)]){a2+=0x1,_0x2cd1d9==b[_0x2ebf6d(0x120)]&&(caixa[_0x2ebf6d(0x15a)](a1),caixa[_0x2ebf6d(0x15a)](a2));}}if(a1>=0x0&&a2>=0x0)return forcaWord[caixa[0x0]]['words'][_0x2ebf6d(0x10f)](caixa[0x1],0x1),saveForcaWord(forcaWord),_0x33ed26(_0x2ebf6d(0x129));else return _0x33ed26(_0x2ebf6d(0x152));}const isForcaGame=_0x2da397=>{const _0x4d6cec=_0x567347;if(fs[_0x4d6cec(0x136)](sendPathForcaGame(_0x2da397)))return!![];return![];};function saveForcaGame(_0x56495e,_0x496885){saveJSON(_0x56495e,sendPathForcaGame(_0x496885));}function startForcaGame(_0x387b96,_0x46df35,_0x3eb390){const _0x1060f6=_0x567347;palavra=getRandomWordForcaGame(),sp=palavra[_0x1060f6(0x120)]['split']('\x20'),nm=[];for(s of sp){nm['push']('_\x20'['repeat'](s[_0x1060f6(0x148)]));}caixa=[];for(a=0x0;a<sp['length'];a++){caixa[_0x1060f6(0x15a)]({'words':[]});for(b of sp[a]){caixa[a][_0x1060f6(0x11e)][_0x1060f6(0x15a)]({'letra':b,'acertou':![]});}}game={'ID':sendHours(_0x1060f6(0x145))+sendHours(_0x1060f6(0x12b)),'title':palavra[_0x1060f6(0x139)],'nome':palavra[_0x1060f6(0x120)],'desc':palavra[_0x1060f6(0x13c)],'erros':0x0,'letras':[],'resultado':caixa},saveForcaGame(game,_0x3eb390),txt=_0x1060f6(0x13a)+iniMai(palavra['title'])+_0x1060f6(0x112)+iniMai(palavra[_0x1060f6(0x13c)])+_0x1060f6(0x10e)+nm[_0x1060f6(0x13b)]('\x09\x09')+'\x0a\x0a—\x0a•\x20Use:\x20'+_0x46df35+_0x1060f6(0x125),_0x387b96(txt);}function resetForcaGame(_0x168ac4){const _0x435278=_0x567347;fs[_0x435278(0x144)](sendPathForcaGame(_0x168ac4));}function restartForcaGame(_0x6ff81b,_0x594bf7,_0x52287){resetForcaGame(_0x52287),setTimeout(()=>{startForcaGame(_0x6ff81b,_0x594bf7,_0x52287);},0x3e8);}const getJSONforcaGame=_0x4495fd=>{const _0x2ef530=_0x567347;return jogo=JSON[_0x2ef530(0x158)](fs['readFileSync'](sendPathForcaGame(_0x4495fd))),jogo;},letraFoiJogada=(_0x3452c4,_0x3b2e55)=>{const _0x31b062=_0x567347;data=getJSONforcaGame(_0x3452c4);if(data[_0x31b062(0x133)][_0x31b062(0x148)]<=0x0)return![];nmr=0x0;for(i of data[_0x31b062(0x133)]){if(rmLetras(_0x3b2e55)===rmLetras(i))nmr+=0x1;}return nmr>0x0?!![]:![];},isTrueLetter=(_0x4e7f12,_0x39e763)=>{const _0x1cfd6f=_0x567347;data=getJSONforcaGame(_0x4e7f12),nmr=0x0;for(a of data['resultado']){for(b of a[_0x1cfd6f(0x11e)]){if(rmLetras(_0x39e763)===rmLetras(b[_0x1cfd6f(0x154)]))nmr+=0x1;}}return nmr>0x0?!![]:![];},isLetterFinishForcaGame=_0x428b12=>{const _0x427692=_0x567347;data=getJSONforcaGame(_0x428b12),total=0x0;for(a of data[_0x427692(0x11f)]){for(b of a['words']){if(b[_0x427692(0x14f)])total+=0x1;}}nome=data['nome'][_0x427692(0x12f)]('\x20')[_0x427692(0x13b)]('')[_0x427692(0x148)];if(total==nome)return!![];return![];};function registrarLetraForca(_0xf6f6,_0x4d6fd7){const _0x48fb47=_0x567347;data=getJSONforcaGame(_0xf6f6),data[_0x48fb47(0x133)][_0x48fb47(0x15a)](_0x4d6fd7),saveForcaGame(data,_0xf6f6);if(isTrueLetter(_0xf6f6,_0x4d6fd7)){caixa=[];for(a=0x0;a<data[_0x48fb47(0x11f)]['length'];a++){caixa[_0x48fb47(0x15a)]({'words':[]});for(b of data[_0x48fb47(0x11f)][a][_0x48fb47(0x11e)]){r=rmLetras(_0x4d6fd7)===rmLetras(b[_0x48fb47(0x154)])||b[_0x48fb47(0x14f)]?!![]:![],caixa[a][_0x48fb47(0x11e)][_0x48fb47(0x15a)]({'letra':b[_0x48fb47(0x154)],'acertou':r});}}data['resultado']=caixa,saveForcaGame(data,_0xf6f6);}}const getWordSplitForcaGame=_0x2a4724=>{const _0x54b4ad=_0x567347;return data=getJSONforcaGame(_0x2a4724),txt=data[_0x54b4ad(0x11f)][_0x54b4ad(0x155)](_0xaf2b76=>_0xaf2b76[_0x54b4ad(0x11e)][_0x54b4ad(0x155)](_0x220297=>_0x220297[_0x54b4ad(0x14f)]?_0x220297['letra'][_0x54b4ad(0x151)]():'_')[_0x54b4ad(0x13b)]('\x20'))[_0x54b4ad(0x13b)]('\x09\x09'),txt;},getErrEmojiForcaGame=_0x17ac4b=>{const _0x2bc22a=_0x567347;return data=getJSONforcaGame(_0x17ac4b),nmr=data['erros'],(nmr>0x0?'\x09\x09🙄':'')+'\x0a'+(nmr>0x2?_0x2bc22a(0x149):'')+(nmr>0x1?(nmr>0x2?'':'\x09\x09')+'👕':'')+(nmr>0x3?_0x2bc22a(0x157):'')+'\x0a'+(nmr>0x4?_0x2bc22a(0x14d):'')+'\x0a'+(nmr>0x5?_0x2bc22a(0x132):'')+(nmr>0x6?'👟':'');};function _0x418b(_0x589f98,_0x1e95ba){const _0x59c252=_0x59c2();return _0x418b=function(_0x418b76,_0xd70dbc){_0x418b76=_0x418b76-0x107;let _0x1d22dc=_0x59c252[_0x418b76];return _0x1d22dc;},_0x418b(_0x589f98,_0x1e95ba);}function sendTextForcaGame(_0x4f0159,_0x51ea73,_0x1c5772){const _0xb3589b=_0x567347;data=getJSONforcaGame(_0x1c5772),txt=_0xb3589b(0x122)+iniMai(data['title'])+_0xb3589b(0x112)+iniMai(data[_0xb3589b(0x13c)])+'\x0a'+(data['letras']['length']>0x0?'•\x20Letras\x20Jogadas:\x20'+data[_0xb3589b(0x133)][_0xb3589b(0x13b)](',\x20')+'\x0a':'')+'______\x0a\x09\x09\x09|\x0a'+getErrEmojiForcaGame(_0x1c5772)+'\x0a\x0a'+getWordSplitForcaGame(_0x1c5772)+_0xb3589b(0x146)+_0x51ea73+'fc\x20Para\x20Responder',_0x4f0159(txt);}const getTextForcaGame=_0x4a3e5c=>{const _0x249321=_0x567347;return data=getJSONforcaGame(_0x4a3e5c),_0x249321(0x122)+iniMai(data['title'])+_0x249321(0x112)+iniMai(data['desc'])+'\x0a—\x0a\x09\x09\x09|\x0a'+getErrEmojiForcaGame(_0x4a3e5c)+'\x0a\x0a'+getWordSplitForcaGame(_0x4a3e5c);};async function jogarLetraForcaGame(_0x5b3825,_0x269ec1,_0x3adad8,_0x4603c9,_0x4daf08){const _0x18ec7a=_0x567347;data=getJSONforcaGame(_0x269ec1);if(_0x4daf08[_0x18ec7a(0x148)]>0x1)return rmLetras(_0x4daf08)===rmLetras(data[_0x18ec7a(0x120)])?(addVitoriaForca(_0x3adad8,0x1),errou='•\x20Parabéns\x20@'+_0x3adad8[_0x18ec7a(0x12f)]('@')[0x0]+_0x18ec7a(0x124)):(addDerrotaForca(_0x3adad8,0x1),errou=_0x18ec7a(0x142)+_0x3adad8['split']('@')[0x0]+',\x20Tentou\x20Acertar\x20Toda\x20A\x20Palavra\x20E\x20Errou!\x20Ai\x20Que\x20Burro\x20Da\x20Zero\x20Pra\x20Ele'),errou+=_0x18ec7a(0x156)+_0x4603c9+'rfc',_0x5b3825(errou),restartForcaGame(_0x5b3825,_0x4603c9,_0x269ec1);else{if(letraFoiJogada(_0x269ec1,_0x4daf08))return _0x5b3825('•\x20Já\x20Jogou\x20Esta\x20Letra!\x20Use\x20Outra!');registrarLetraForca(_0x269ec1,_0x4daf08);if(isTrueLetter(_0x269ec1,_0x4daf08)){if(isLetterFinishForcaGame(_0x269ec1))return _0x5b3825(getTextForcaGame(_0x269ec1)+_0x18ec7a(0x159)+_0x3adad8[_0x18ec7a(0x12f)]('@')[0x0]+_0x18ec7a(0x14c)+data[_0x18ec7a(0x120)][_0x18ec7a(0x151)]()+_0x18ec7a(0x14b)),await sleep(0x7d0),addVitoriaForca(_0x3adad8,0x1),restartForcaGame(_0x5b3825,_0x4603c9,_0x269ec1);else _0x5b3825('•\x20Parabéns\x20@'+_0x3adad8['split']('@')[0x0]+_0x18ec7a(0x113)),await sleep(0x2bc),registrarIdNaForca(_0x3adad8,_0x269ec1,0x1,0x0),sendTextForcaGame(_0x5b3825,_0x4603c9,_0x269ec1);}else{if(data[_0x18ec7a(0x141)]>=0x7)return _0x5b3825(_0x18ec7a(0x118)+_0x3adad8[_0x18ec7a(0x12f)]('@')[0x0]+'\x20Irei\x20Reiniciar\x20O\x20Jogo\x20Novamente.\x20Aguarde...'),await sleep(0x7d0),addDerrotaForca(_0x3adad8,0x1),restartForcaGame(_0x5b3825,_0x4603c9,_0x269ec1);else data['erros']+=0x1,saveForcaGame(data,_0x269ec1),_0x5b3825(_0x18ec7a(0x123)+_0x3adad8[_0x18ec7a(0x12f)]('@')[0x0]+_0x18ec7a(0x15e)+(0x8-data[_0x18ec7a(0x141)])+_0x18ec7a(0x130)+(Number(0x8-data[_0x18ec7a(0x141)])!=0x1?'s':'')+'\x20'),await sleep(0x2bc),registrarIdNaForca(_0x3adad8,_0x269ec1,0x1,0x1),sendTextForcaGame(_0x5b3825,_0x4603c9,_0x269ec1);}}}module[_0x567347(0x12a)]={'saveUsuForcaGame':saveUsuForcaGame,'usuarios_forca':usuarios_forca,'addUsuarioForca':addUsuarioForca,'rmUsuarioForca':rmUsuarioForca,'addAcertoUsuForca':addAcertoUsuForca,'addErroUsuForca':addErroUsuForca,'existIdForcaGameInUsu':existIdForcaGameInUsu,'registrarIdNaForca':registrarIdNaForca,'addVitoriaForca':addVitoriaForca,'addDerrotaForca':addDerrotaForca,'getUsuDatabaseForca':getUsuDatabaseForca,'saveForcaWord':saveForcaWord,'forcaWord':forcaWord,'sendPathForcaGame':sendPathForcaGame,'existSomeWordForcaGame':existSomeWordForcaGame,'existThemeWordForcaGame':existThemeWordForcaGame,'getThemeWordForcaGame':getThemeWordForcaGame,'getRandomWordForcaGame':getRandomWordForcaGame,'rgWordForcaGame':rgWordForcaGame,'rmThemeForcaGame':rmThemeForcaGame,'rmWordForcaGame':rmWordForcaGame,'isForcaGame':isForcaGame,'saveForcaGame':saveForcaGame,'startForcaGame':startForcaGame,'resetForcaGame':resetForcaGame,'restartForcaGame':restartForcaGame,'getJSONforcaGame':getJSONforcaGame,'letraFoiJogada':letraFoiJogada,'isTrueLetter':isTrueLetter,'isLetterFinishForcaGame':isLetterFinishForcaGame,'registrarLetraForca':registrarLetraForca,'getWordSplitForcaGame':getWordSplitForcaGame,'getErrEmojiForcaGame':getErrEmojiForcaGame,'sendTextForcaGame':sendTextForcaGame,'jogarLetraForcaGame':jogarLetraForcaGame};
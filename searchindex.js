Search.setIndex({docnames:["api","commandline","index","intro","modules","quickstart","stomp","stomp.adapter"],envversion:53,filenames:["api.rst","commandline.rst","index.rst","intro.rst","modules.rst","quickstart.rst","stomp.rst","stomp.adapter.rst"],objects:{"":{stomp:[6,0,0,"-"]},"stomp.adapter":{multicast:[7,0,0,"-"]},"stomp.adapter.multicast":{MulticastConnection:[7,1,1,""],MulticastTransport:[7,1,1,""]},"stomp.adapter.multicast.MulticastConnection":{connect:[7,2,1,""],disconnect:[7,2,1,""],send_frame:[7,2,1,""],subscribe:[7,2,1,""],unsubscribe:[7,2,1,""]},"stomp.adapter.multicast.MulticastTransport":{attempt_connection:[7,2,1,""],process_frame:[7,2,1,""],receive:[7,2,1,""],send:[7,2,1,""],stop:[7,2,1,""]},"stomp.backward":{get_errno:[6,3,1,""]},"stomp.backward2":{decode:[6,3,1,""],encode:[6,3,1,""],input_prompt:[6,3,1,""],join:[6,3,1,""],pack:[6,3,1,""]},"stomp.backward3":{decode:[6,3,1,""],encode:[6,3,1,""],input_prompt:[6,3,1,""],join:[6,3,1,""],pack:[6,3,1,""]},"stomp.backwardsock25":{get_socket:[6,3,1,""]},"stomp.backwardsock26":{get_socket:[6,3,1,""]},"stomp.connect":{BaseConnection:[6,1,1,""],StompConnection10:[6,1,1,""],StompConnection11:[6,1,1,""],StompConnection12:[6,1,1,""]},"stomp.connect.BaseConnection":{get_listener:[6,2,1,""],get_ssl:[6,2,1,""],is_connected:[6,2,1,""],remove_listener:[6,2,1,""],set_listener:[6,2,1,""],set_receipt:[6,2,1,""],set_ssl:[6,2,1,""],start:[6,2,1,""],stop:[6,2,1,""]},"stomp.connect.StompConnection10":{connect:[6,2,1,""],disconnect:[6,2,1,""]},"stomp.connect.StompConnection11":{connect:[6,2,1,""],disconnect:[6,2,1,""]},"stomp.connect.StompConnection12":{connect:[6,2,1,""],disconnect:[6,2,1,""]},"stomp.exception":{ConnectFailedException:[6,4,1,""],ConnectionClosedException:[6,4,1,""],InterruptedException:[6,4,1,""],NotConnectedException:[6,4,1,""],StompException:[6,4,1,""]},"stomp.listener":{ConnectionListener:[6,1,1,""],HeartbeatListener:[6,1,1,""],PrintingListener:[6,1,1,""],Publisher:[6,1,1,""],StatsListener:[6,1,1,""],TestListener:[6,1,1,""],WaitingListener:[6,1,1,""]},"stomp.listener.ConnectionListener":{on_before_message:[6,2,1,""],on_connected:[6,2,1,""],on_connecting:[6,2,1,""],on_disconnected:[6,2,1,""],on_error:[6,2,1,""],on_heartbeat:[6,2,1,""],on_heartbeat_timeout:[6,2,1,""],on_message:[6,2,1,""],on_receipt:[6,2,1,""],on_receiver_loop_completed:[6,2,1,""],on_send:[6,2,1,""]},"stomp.listener.HeartbeatListener":{on_connected:[6,2,1,""],on_disconnected:[6,2,1,""],on_error:[6,2,1,""],on_heartbeat:[6,2,1,""],on_message:[6,2,1,""],on_receipt:[6,2,1,""],on_send:[6,2,1,""]},"stomp.listener.PrintingListener":{on_before_message:[6,2,1,""],on_connected:[6,2,1,""],on_connecting:[6,2,1,""],on_disconnected:[6,2,1,""],on_error:[6,2,1,""],on_heartbeat:[6,2,1,""],on_heartbeat_timeout:[6,2,1,""],on_message:[6,2,1,""],on_receipt:[6,2,1,""],on_send:[6,2,1,""]},"stomp.listener.Publisher":{get_listener:[6,2,1,""],remove_listener:[6,2,1,""],set_listener:[6,2,1,""]},"stomp.listener.StatsListener":{on_connecting:[6,2,1,""],on_disconnected:[6,2,1,""],on_error:[6,2,1,""],on_heartbeat:[6,2,1,""],on_heartbeat_timeout:[6,2,1,""],on_message:[6,2,1,""],on_send:[6,2,1,""]},"stomp.listener.TestListener":{get_latest_message:[6,2,1,""],on_heartbeat:[6,2,1,""],on_message:[6,2,1,""],wait_for_heartbeat:[6,2,1,""],wait_for_message:[6,2,1,""]},"stomp.listener.WaitingListener":{on_receipt:[6,2,1,""],wait_on_receipt:[6,2,1,""]},"stomp.protocol":{Protocol10:[6,1,1,""],Protocol11:[6,1,1,""],Protocol12:[6,1,1,""]},"stomp.protocol.Protocol10":{abort:[6,2,1,""],ack:[6,2,1,""],begin:[6,2,1,""],commit:[6,2,1,""],connect:[6,2,1,""],disconnect:[6,2,1,""],send:[6,2,1,""],send_frame:[6,2,1,""],subscribe:[6,2,1,""],unsubscribe:[6,2,1,""]},"stomp.protocol.Protocol11":{abort:[6,2,1,""],ack:[6,2,1,""],begin:[6,2,1,""],commit:[6,2,1,""],connect:[6,2,1,""],disconnect:[6,2,1,""],nack:[6,2,1,""],send:[6,2,1,""],send_frame:[6,2,1,""],subscribe:[6,2,1,""],unsubscribe:[6,2,1,""]},"stomp.protocol.Protocol12":{ack:[6,2,1,""],connect:[6,2,1,""],nack:[6,2,1,""],send:[0,2,1,""],subscribe:[0,2,1,""]},"stomp.transport":{BaseTransport:[6,1,1,""],Transport:[6,1,1,""]},"stomp.transport.BaseTransport":{attempt_connection:[6,2,1,""],cleanup:[6,2,1,""],disconnect_socket:[6,2,1,""],get_listener:[6,2,1,""],is_connected:[6,2,1,""],notify:[6,2,1,""],override_threading:[6,2,1,""],process_frame:[6,2,1,""],receive:[6,2,1,""],remove_listener:[6,2,1,""],send:[6,2,1,""],set_connected:[6,2,1,""],set_listener:[6,2,1,""],set_receipt:[6,2,1,""],start:[6,2,1,""],stop:[6,2,1,""],transmit:[6,2,1,""],wait_for_connection:[6,2,1,""]},"stomp.transport.Transport":{attempt_connection:[6,2,1,""],cleanup:[6,2,1,""],disconnect_socket:[6,2,1,""],get_ssl:[6,2,1,""],is_connected:[6,2,1,""],receive:[6,2,1,""],send:[6,2,1,""],set_ssl:[6,2,1,""]},"stomp.utils":{Frame:[6,1,1,""],calculate_heartbeats:[6,3,1,""],clean_headers:[6,3,1,""],convert_frame_to_lines:[6,3,1,""],default_create_thread:[6,3,1,""],is_localhost:[6,3,1,""],length:[6,3,1,""],merge_headers:[6,3,1,""],parse_frame:[6,3,1,""],parse_headers:[6,3,1,""]},stomp:{adapter:[7,0,0,"-"],backward2:[6,0,0,"-"],backward3:[6,0,0,"-"],backward:[6,0,0,"-"],backwardsock25:[6,0,0,"-"],backwardsock26:[6,0,0,"-"],backwardsock:[6,0,0,"-"],colors:[6,0,0,"-"],connect:[6,0,0,"-"],constants:[6,0,0,"-"],exception:[6,0,0,"-"],listener:[6,0,0,"-"],protocol:[6,0,0,"-"],transport:[6,0,0,"-"],utils:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception"},terms:{"13e0":0,"13e01":0,"14aa2":0,"14ab2":0,"14b03":0,"14b04":0,"14b05":0,"27ff":0,"3f1a":0,"46a3":0,"4a72":0,"4e11":0,"72348a94f5c":0,"825a5cd6":0,"845e36d48412":0,"8ba8":0,"9e3c":0,"boolean":6,"byte":[6,7],"case":[0,6],"caste\u00f1ada":3,"catch":6,"char":6,"class":[0,5,6,7],"default":[0,1,6],"dur\u00e1n":3,"final":0,"float":6,"function":6,"import":[0,5],"int":6,"long":6,"null":6,"return":[0,6,7],"skytt\u00e4":3,"true":[0,5,6],"try":[0,6],And:[0,1],For:6,One:0,The:[0,3,6],There:0,Use:[0,6],Useful:6,Using:2,__init__:0,__reconnect_attempts_max:6,_sslmethod:[0,6],a00:0,abil:[0,1],abort:[0,1,6],about:2,abov:0,accept:0,access:[1,3,5],accord:6,accordingli:6,ack:[1,2,5,6,7],acknowledg:[0,6],action:0,activemq:3,actual:[0,6],adapt:[4,6],add:6,added:3,addit:[0,6],address:0,admin:[0,1,5],after:[3,5,6],afterward:0,against:[3,6],agnost:6,all:[0,3,6],allow:[0,6],also:[0,1,5,6],altern:6,andrea:3,ani:[0,6],anyth:6,anywai:0,apach:[0,3,6],apart:1,api:[1,2],apollo:[0,3],app:6,appli:6,applic:[2,3],arg:6,arguabl:0,argument:[1,5,6],argv:5,arriv:6,associ:6,assum:[0,5],attack:6,attempt:6,attempt_connect:[6,7],attribut:6,authent:6,author:6,auto:[0,5,6,7],auto_content_length:[0,6],auto_decod:[0,6],automat:[0,6],avail:[3,6],avoid:6,awai:3,b39f3136:0,back:0,backward2:4,backward3:4,backward:4,backwardsock25:4,backwardsock26:4,backwardsock:4,base:[3,6,7],baseconnect:[6,7],basetransport:6,basic:3,beat:[0,6],been:[3,6],befor:[0,6],begin:[0,1,6],behaviour:6,below:0,between:[0,6],beyond:6,bin:5,bodi:[0,5,6,7],bool:[0,6,7],both:3,brigg:[2,6],broken:0,broker:[0,3,5,6,7],build:0,bump:6,byte_data:6,ca_cert:6,calcul:6,calculate_heartbeat:6,call:[0,3,6],callback:6,can:[0,1,2,5,6],cert:6,cert_fil:6,cert_valid:6,certif:6,chang:6,char_data:6,charact:6,chaskiel:3,chb:6,check:[0,6],chueyr:3,chunk:6,ciciliati:3,clean:[6,7],clean_head:6,cleanup:6,clear:6,cli:[1,3],client:[0,2,3,6],close:6,cmd:[6,7],code:[0,3],collect:0,color:4,com:6,combin:6,command:[2,3,6],commit:[0,1,6],common:6,commonnam:6,commun:[3,6],compat:6,complet:[0,6],compris:[0,6],configur:6,conn:[0,5],connect:[1,2,4,5,7],connect_and_subscrib:0,connectfailedexcept:6,connection10:0,connection11:0,connection12:0,connectionclosedexcept:6,connectionlisten:[0,5,6],consequ:0,consid:0,constant:4,construct:6,consum:[0,6],consumpt:6,contact:3,contain:[0,1,6],content:[0,2,4],content_typ:[0,6],continu:0,contributor:2,conveni:7,convert:6,convert_frame_to_lin:6,correspond:0,could:[0,3],count:6,creat:[2,3,6],create_thread_fc:6,creation:6,current:[1,3,6],current_host_and_port:6,dai:3,data:6,deal:2,decid:0,decod:6,def:[0,5],default_create_thread:6,definit:6,delai:6,deprec:6,describ:6,descript:[0,1,6],destin:[0,1,5,6,7],detail:[0,6],detect:6,determin:6,develop:3,dict:[0,6,7],dictionari:6,didn:3,differ:[0,1,6],dir:5,directli:6,directori:5,discard:0,disconnect:[2,5,6,7],disconnect_socket:6,discov:3,displai:6,distant:3,distinct:6,document:1,doesn:6,don:[0,7],done:6,drop:0,dump:1,each:[0,6],easili:3,effect:6,either:[0,5,6],els:[3,6],empti:6,en1:0,enabl:[1,6],encod:[6,7],encoded_fram:[6,7],endless:3,enforc:[0,6],enhanc:3,ensur:6,entri:6,eof:1,equal:6,err_msg:6,errno:6,error:[0,1,5,6],establish:[2,6,7],etc:1,eugen:3,even:3,exampl:[0,6],exceed:6,except:4,execut:1,exit:[1,6,7],extra:6,factor:6,fail:6,failov:0,failur:0,fals:[0,6,7],fe80:0,fe90:0,featur:3,fernando:3,few:0,file:[1,6],filenam:1,find:[1,2],finish:6,first:[0,3,6],follow:[0,1,5],for_host:6,found:6,frame:[0,6,7],frame_str:[6,7],frame_typ:6,from:[0,1,6,7],full:[1,3],further:2,futur:6,gavin:3,gdaniec:3,gener:[0,6],get:[1,2,6],get_errno:6,get_latest_messag:6,get_listen:6,get_socket:6,get_ssl:6,getpeercert:6,github:[0,2,3,6],give:0,given:6,grace:0,gracefulli:0,greater:6,grundman:3,guest:0,had:3,handl:6,handler:0,has:[0,3,6],have:[3,6,7],header:[0,1,5,6,7],header_map_list:6,heart:[0,6],heart_beat_receive_scal:[0,6],heartbeat:[0,6],heartbeatlisten:6,held:0,hello:5,help:[1,2,5],helper:6,here:0,herebi:5,host:[0,1,6],host_and_port:[0,6],hostnam:[1,6],how:6,html:[0,6],http:[0,6],idea:0,identifi:[0,6],ids:0,ignor:6,implement:[0,6],incept:3,includ:6,incom:6,increas:6,increment:6,independ:6,index:2,individu:[0,6],info:[0,1,2,3,6],inform:[5,6],initi:[0,6],initialis:[0,6],inlin:1,input:6,input_prompt:6,insid:0,instal:[1,3,5],instanti:6,instead:1,inter:3,interact:0,interfac:[5,6],intermitt:3,interrupt:6,interruptedexcept:6,introduct:2,invok:6,ipv6:[0,6],is_connect:6,is_localhost:6,issu:[2,3],itch:3,its:[3,6],itself:6,jason:[2,6],jasonrbrigg:6,jayson:3,jbossmessag:3,joe:3,join:[5,6],julian:3,just:0,keep:6,keepal:[0,6],kei:6,key_fil:6,keyword_head:[0,6,7],know:6,kwarg:6,larg:1,last:6,least:5,leav:6,length:[0,6],let:6,level:6,lib:5,librari:[3,5,6],licens:6,line:[2,3,6],list:[0,3,5,6],listen:[0,1,4],littl:3,local:[0,6],localhost:[0,1,5,6],log:1,login:[0,6],longer:[0,6],look:[0,3],loop:6,loopback:6,lost:6,lower:6,lstnr:6,machin:0,main:6,man:6,manag:6,map:[0,6],martin:3,maximum:6,mcast:7,mean:6,mechan:6,member:6,mention:6,merg:0,merge_head:6,messag:[1,2,3,5,6,7],method:[0,6,7],middl:6,might:0,mime:[0,6],mode:6,modul:[2,4],more:[0,1,5,6],most:6,mostli:6,multicast:[4,6],multicastconnect:7,multicasttransport:7,multipl:[0,6],mybrok:0,mylisten:[0,5],nack:[1,2,6],name:[0,6],need:[0,5,6],network:6,newlin:6,next:[0,6],non:[0,7],none:[0,6,7],normal:1,notconnectedexcept:6,note:[0,1,3,6],notifi:6,number:[0,1,3,6],object:[6,7],obvious:7,occasion:6,off:1,offici:6,offset:6,on_before_messag:[0,6],on_connect:[0,6],on_disconnect:[0,6],on_error:[0,5,6],on_heartbeat:6,on_heartbeat_timeout:6,on_messag:[0,5,6],on_receipt:[0,6],on_receiver_loop_complet:6,on_send:[0,6],onc:[0,1,5,6],one:[0,3,6,7],onli:[0,3],oper:6,option:[0,1,6],order:[0,6],org:6,other:[0,3,7],out:6,outbound:6,outgo:6,output:0,outsid:6,outstand:[2,3],over:[6,7],overrid:6,override_thread:6,own:[0,6],pack:6,packag:[4,5],packet:6,page:[0,2,6],pair:6,param:6,paramet:[0,1,6,7],pars:6,parse_fram:6,parse_head:6,pass:[0,5],passcod:[0,6,7],password:[0,1,5,6],past:3,path:6,payload:6,per:[0,6],percentag:6,perform:[0,6,7],perfunctorili:3,period:6,pictur:3,piec:6,pieuchot:3,pip:[3,5],platform:3,plu:[0,6],point:[0,6],port:[0,1,6],possibl:0,pre:6,predomin:6,prefer_localhost:[0,6],preserv:6,previou:6,print:[0,1,5],printinglisten:[0,6],process:[0,6],process_fram:[6,7],program:1,programmat:[1,5],project:[2,3,6],prompt:[1,6],protocol10:6,protocol11:6,protocol12:[0,6,7],protocol:[0,1,3,4,5,7],protocol_tlsv1:[0,6],protocol_x:6,provid:[0,1,5,6],publish:6,py2:6,py3:6,python2:6,python3:[5,6],python:[3,5,6],queue:[0,1,5,6],quick:2,quit:1,rabbitmq:3,rafael:3,rais:[3,6],random:6,randomli:[3,6],rang:0,rather:[6,7],raw:[6,7],read:6,readi:6,real:6,realli:6,reattempt:6,receipt:[0,6,7],receipt_id:6,receiv:[1,2,5,6,7],receiver_loop:6,reconnect:[0,6],reconnect_attempts_max:[0,6],reconnect_sleep_increas:[0,6],reconnect_sleep_initi:[0,6],reconnect_sleep_jitt:[0,6],reconnect_sleep_max:[0,6],record:[1,6],recv:6,recv_byt:[0,6],reestablish:6,refer:5,regardless:6,regist:6,registri:6,releas:6,remot:0,remov:6,remove_listen:6,report:3,repres:[0,6],request:[0,3,6],requir:[0,1,6],reset:6,resourc:0,respons:[0,1,6],result:0,rise:3,roi:3,rollback:1,rtype:6,run:[0,1,3,5,6],safe:6,same:0,scale:6,scheid:3,schobel:3,scratch:3,script:1,scriptabl:3,search:2,second:[0,6],see:[0,5,6],seen:0,self:[0,5],send:[1,2,3,5,6,7],send_fram:[6,7],sendfil:1,sendrec:1,sendrepli:1,sent:[0,1,6],separ:[0,6],sequenc:6,server:[0,1,6],session:0,set:[0,1,3,6],set_connect:6,set_listen:[0,5,6],set_receipt:6,set_ssl:6,setup:0,shb:6,should:6,show:1,shutdown:[0,6,7],side:6,signatur:6,signific:0,significantli:3,simpl:0,simplest:0,simpli:[0,6],sinc:3,singl:6,site:5,sitepackag:5,sleep:[0,5,6],smidgen:3,socket:[0,6,7],some:[0,1,6],someth:3,sort:[0,6],specif:[0,6],specifi:[0,1,6],spent:3,ssl:[1,6],ssl_ca_cert:[0,6],ssl_cert_fil:[0,6],ssl_cert_valid:[0,6],ssl_key_fil:[0,6],ssl_version:[0,6],sslsocket:6,stall:3,stamped:6,standalon:1,standard:[0,7],start:[0,2,3,6],startup:5,stat:[0,1],statist:[1,6],statslisten:[0,6],step:0,still:[6,7],stomp:[0,1],stompconnection10:6,stompconnection11:6,stompconnection12:[0,6],stompexcept:6,stompserv:3,stop:[6,7],str:[0,6,7],string:6,structur:6,strulyov:3,subclass:[0,6],submodul:4,subpackag:4,subscrib:[0,1,5,6,7],subscribe_ack_head:6,subscript:[0,6],subsequ:[0,3],success:[0,5],suit:3,sun:3,support:[0,3,6],sys:5,system:[0,1,6],take:0,tatiana:3,tcp:6,telecommun:3,tell:0,test1:0,test2:0,test3:0,test4:0,test5:0,test:[0,3,5,6],testlisten:6,text:3,than:[0,6,7],thei:0,them:6,thi:[0,1,6],those:3,thread:[0,6,7],three:6,through:[0,6,7],thrown:6,time:[0,3,5,6],timeout:[0,6],timestamp:6,togeth:6,topic:[0,1,6],transact:[2,6],transmiss:6,transmit:[0,6],transport:[0,4,7],try_loopback_connect:[0,6],tupl:[0,6],turn:6,twice:6,txid:0,type:[0,1,5,6,7],typic:7,underli:6,uniqu:[0,6],unix:5,unsubscrib:[0,1,6,7],until:[0,6],usag:[0,1],use:[0,1,3,6,7],use_ssl:[0,6],used:6,useful:3,user:[0,1,6],usernam:[0,1,5,6,7],uses:7,using:[0,1,3,5,6,7],usual:6,util:4,valid:6,validation_funct:6,valu:6,vantuyl:3,variat:3,variou:6,ver:1,verbos:1,version:[0,1,3,5,6],vhost:[0,6],via:[3,6],view:[2,3],vill:3,virtual:6,virtualbox:3,wai:0,wait:[0,5,6,7],wait_for_connect:6,wait_for_heartbeat:6,wait_for_messag:6,wait_on_receipt:[0,6,7],waitinglisten:6,want:[3,6,7],were:3,what:[1,6],when:[0,3,6],whenev:6,where:[0,1,6],whether:6,which:[0,3,6],within:1,without:6,work:3,world:5,wrap:6,www:6,x509:6,year:3,you:[0,1,2,3,5,6,7],your:[0,6]},titles:["Using the API","Using the Command-line client application","Stomp.py 4.1.20 documentation","Introduction to Stomp.py","stomp","Quick start","stomp package","stomp.adapter package"],titleterms:{Using:[0,1],about:3,ack:0,adapt:7,api:[0,5],applic:1,backward2:6,backward3:6,backward:6,backwardsock25:6,backwardsock26:6,backwardsock:6,client:[1,5],color:6,command:[1,5],connect:[0,6],constant:6,content:[6,7],contributor:3,deal:0,disconnect:0,document:2,establish:0,except:6,get:3,help:3,indic:2,introduct:3,line:[1,5],listen:6,messag:0,modul:[6,7],multicast:7,nack:0,packag:[6,7],protocol:6,quick:5,receiv:0,send:0,start:5,stomp:[2,3,4,5,6,7],submodul:[6,7],subpackag:6,tabl:2,transact:0,transport:6,util:6}})
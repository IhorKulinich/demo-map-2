!function t(e,r,i){
	function n(s,a){
		if(!r[s]){
			if(!e[s]){
				var h="function"==typeof require&&require;
				if(!a&&h)return h(s,!0);
				if(o)return o(s,!0);
				var l=new Error("Cannot find module '"+s+"'");
				throw l.code="MODULE_NOT_FOUND",l
			}
			var u=r[s]={exports:{}};
			e[s][0].call(u.exports,function(t){
				var r=e[s][1][t];
				return n(r?r:t)
			},u,u.exports,t,e,r,i)
		}
		return r[s].exports
	}
	for(var o="function"==typeof require&&require,s=0;s<i.length;s++)
		n(i[s]);
	return n
}({1:[
	function(t,e,r){
		(function(t){
			(function(){
				function i(t,e,r){
					for(var i=(r||0)-1,n=t?t.length:0;++i<n;)
						if(t[i]===e)return i;
					return-1
				}
				function n(t,e){
					var r=typeof e;
					if(t=t.cache,"boolean"==r||null==e)
						return t[e]?0:-1;
					"number"!=r&&"string"!=r&&(r="object");
					var n="number"==r?e:b+e;
					return t=(t=t[r])&&t[n],"object"==r?t&&i(t,e)>-1?0:-1:t?0:-1
				}
				function o(t){
					var e=this.cache,r=typeof t;
					if("boolean"==r||null==t)
						e[t]=!0;
					else{"number"!=r&&"string"!=r&&(r="object");
					var i="number"==r?t:b+t,n=e[r]||(e[r]={});
					"object"==r?(n[i]||(n[i]=[])).push(t):n[i]=!0
				}
			}
			function s(t){
				return t.charCodeAt(0)
			}
			function a(t,e){
				for(var r=t.criteria,i=e.criteria,n=-1,o=r.length;++n<o;)
					{
						var s=r[n],a=i[n];
						if(s!==a){
							if(s>a||"undefined"==typeof s)
								return 1;
							if(a>s||"undefined"==typeof a)
								return-1
						}
					}
					return t.index-e.index
				}
				function h(t){
					var e=-1,r=t.length,i=t[0],n=t[r/2|0],s=t[r-1];
					if(i&&"object"==typeof i&&n&&"object"==typeof n&&s&&"object"==typeof s)
						return!1;
					var a=c();
					a["false"]=a["null"]=a["true"]=a.undefined=!1;
					var h=c();
					for(h.array=t,h.cache=a,h.push=o;++e<r;)
						h.push(t[e]);
					return h
				}
				function l(t){
					return"\\"+K[t]
				}
				function u(){
					return m.pop()||[]
				}
				function c(){
					return x.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}
				}
				function d(t){
					t.length=0,m.length<S&&m.push(t)
				}
				function f(t){
					var e=t.cache;
					e&&f(e),t.array=t.cache=t.criteria=t.object=t.number=t.string=t.value=null,x.length<S&&x.push(t)
				}
				function p(t,e,r){
					e||(e=0),"undefined"==typeof r&&(r=t?t.length:0);
					for(var i=-1,n=r-e||0,o=Array(0>n?0:n);++i<n;)
						o[i]=t[e+i];
					return o
				}
				function g(t){
					function e(t){
						return t&&"object"==typeof t&&!Qi(t)&&Bi.call(t,"__wrapped__")?t:new r(t)
					}
					function r(t,e){
						this.__chain__=!!e,this.__wrapped__=t
					}
					function o(t){
						function e(){
							if(i){
								var t=p(i);
								Pi.apply(t,arguments)
							}
							if(this instanceof e){
								var o=x(r.prototype),s=r.apply(o,t||arguments);
								return Le(s)?s:o
							}
							return r.apply(n,t||arguments)
						}
						var r=t[0],i=t[2],n=t[4];
						return Ki(e,t),e
					}
					function m(t,e,r,i,n){
						if(r){
							var o=r(t);
							if("undefined"!=typeof o)
								return o
						}
						var s=Le(t);
						if(!s)return t;
						var a=Ci.call(t);
						if(!z[a])return t;
						var h=qi[a];
						switch(a){case N:case U:return new h(+t);
							case W:case X:return new h(t);
							case Y:return o=h(t.source,R.exec(t)),o.lastIndex=t.lastIndex,o
						}
						var l=Qi(t);
						if(e){
							var c=!i;i||(i=u()),n||(n=u());
							for(var f=i.length;f--;)
								if(i[f]==t)
									return n[f];
								o=l?h(t.length):{}
							}
							else o=l?p(t):on({},t);
							return l&&(Bi.call(t,"index")&&(o.index=t.index),Bi.call(t,"input")&&(o.input=t.input)),e?(i.push(t),n.push(o),(l?Ke:hn)(t,function(t,s){
								o[s]=m(t,e,r,i,n)}),c&&(d(i),d(n)),o):o
						}
						function x(t){
							return Le(t)?Ni(t):{}
						}
						function S(t,e,r){
							if("function"!=typeof t)return Qr;
							if("undefined"==typeof e||!("prototype"in t))
								return t;
							var i=t.__bindData__;
							if("undefined"==typeof i&&($i.funcNames&&(i=!t.name),i=i||!$i.funcDecomp,!i))
								{
									var n=Fi.call(t);
									$i.funcNames||(i=!M.test(n)),i||(i=B.test(n),Ki(t,i))}if(i===!1||i!==!0&&1&i[1])return t;
									switch(r)
									{case 1:return function(r){
										return t.call(e,r)
									};
									case 2:return function(r,i){
										return t.call(e,r,i)
									};
									case 3:return function(r,i,n){
										return t.call(e,r,i,n)
									};
									case 4:return function(r,i,n,o){
										return t.call(e,r,i,n,o)
									}
								}
								return Pr(t,e)
							}
							function K(t){
								function e(){
									var t=h?s:this;if(n){
										var f=p(n);
										Pi.apply(f,arguments)
									}
									if((o||u)&&(f||(f=p(arguments)),o&&Pi.apply(f,o),u&&f.length<a))
										return i|=16,K([r,c?i:-4&i,f,null,s,a]);
									if(f||(f=arguments),l&&(r=t[d]),this instanceof e){
										t=x(r.prototype);
										var g=r.apply(t,f);
										return Le(g)?g:t
									}
									return r.apply(t,f)
								}
								var r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],h=1&i,l=2&i,u=4&i,c=8&i,d=r;
								return Ki(e,t),e
							}
							function J(t,e){
								var r=-1,o=he(),s=t?t.length:0,a=s>=T&&o===i,l=[];
								if(a){
									var u=h(e);
									u?(o=n,e=u):a=!1
								}
								for(;++r<s;){
									var c=t[r];
									o(e,c)<0&&l.push(c)
								}
								return a&&f(e),l
							}
							function Z(t,e,r,i){
								for(var n=(i||0)-1,o=t?t.length:0,s=[];++n<o;){
									var a=t[n];
									if(a&&"object"==typeof a&&"number"==typeof a.length&&(Qi(a)||de(a))){
										e||(a=Z(a,e,r));
										var h=-1,l=a.length,u=s.length;
										for(s.length+=l;++h<l;)s[u++]=a[h]
									}
								else r||s.push(a)
							}
						return s
					}
					function te(t,e,r,i,n,o){
						if(r){
							var s=r(t,e);
							if("undefined"!=typeof s)
								return!!s
						}
						if(t===e)
							return 0!==t||1/t==1/e;
						var a=typeof t,h=typeof e;
						if(!(t!==t||t&&$[a]||e&&$[h]))
							return!1;
						if(null==t||null==e)
							return t===e;
						var l=Ci.call(t),c=Ci.call(e);
						if(l==k&&(l=V),c==k&&(c=V),l!=c)
							return!1;
						switch(l){
							case N:case U:return+t==+e;
							case W:return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;
							case Y:case X:return t==Ti(e)
						}
						var f=l==G;
						if(!f){var p=Bi.call(t,"__wrapped__"),g=Bi.call(e,"__wrapped__");
						if(p||g)
							return te(p?t.__wrapped__:t,g?e.__wrapped__:e,r,i,n,o);
						if(l!=V)return!1;
						var v=t.constructor,m=e.constructor;
						if(v!=m&&!(Me(v)&&v instanceof v&&Me(m)&&m instanceof m)&&"constructor"in t&&"constructor"in e)
							return!1
					}
					var x=!n;
					n||(n=u()),o||(o=u());
					for(var y=n.length;y--;)
						if(n[y]==t)
							return o[y]==e;
						var b=0;
						if(s=!0,n.push(t),o.push(e),f){
							if(y=t.length,b=e.length,s=b==y,s||i)
								for(;b--;){
									var T=y,S=e[b];
									if(i)
										for(;T--&&!(s=te(t[T],S,r,i,n,o)););
											else if(!(s=te(t[b],S,r,i,n,o)))
												break
										}
									}
									else an(e,function(e,a,h){
										return Bi.call(h,a)?(b++,s=Bi.call(t,a)&&te(t[a],e,r,i,n,o)):void 0}),s&&!i&&an(t,function(t,e,r){
											return Bi.call(r,e)?s=--b>-1:void 0
										});
										return n.pop(),o.pop(),x&&(d(n),d(o)),s
									}
									function ee(t,e,r,i,n){
										(Qi(e)?Ke:hn)(e,function(e,o){
											var s,a,h=e,l=t[o];
											if(e&&((a=Qi(e))||ln(e))){
												for(var u=i.length;u--;)
													if(s=i[u]==e){
														l=n[u];
														break
													}
													if(!s){
														var c;
														r&&(h=r(l,e),(c="undefined"!=typeof h)&&(l=h)),c||(l=a?Qi(l)?l:[]:ln(l)?l:{}),i.push(e),n.push(l),c||ee(l,e,r,i,n)
													}
												}
												else r&&(h=r(l,e),"undefined"==typeof h&&(h=e)),"undefined"!=typeof h&&(l=h);t[o]=l
											})
									}
									function ie(t,e){
										return t+Li(Hi()*(e-t+1))
									}
									function ne(t,e,r){
										var o=-1,s=he(),a=t?t.length:0,l=[],c=!e&&a>=T&&s===i,p=r||c?u():l;
										if(c){
											var g=h(p);
											s=n,p=g
										}
										for(;++o<a;){
											var v=t[o],m=r?r(v,o,t):v;(e?!o||p[p.length-1]!==m:s(p,m)<0)&&((r||c)&&p.push(m),l.push(v))
										}
										return c?(d(p.array),f(p)):r&&d(p),l
									}
									function oe(t){
										return function(r,i,n){
											var o={};
											i=e.createCallback(i,n,3);
											var s=-1,a=r?r.length:0;
											if("number"==typeof a)
												for(;++s<a;){
													var h=r[s];
													t(o,h,i(h,s,r),r)
												}
												else hn(r,function(e,r,n){
													t(o,e,i(e,r,n),n)
												});
													return o
												}
											}
											function se(t,e,r,i,n,s){
												var a=1&e,h=2&e,l=4&e,u=16&e,c=32&e;
												if(!h&&!Me(t))throw new Si;
												u&&!r.length&&(e&=-17,u=r=!1),c&&!i.length&&(e&=-33,c=i=!1);
												var d=t&&t.__bindData__;if(d&&d!==!0)
												return d=p(d),
												d[2]&&(d[2]=p(d[2])),
												d[3]&&(d[3]=p(d[3])),
												!a||1&d[1]||(d[4]=n),
												!a&&1&d[1]&&(e|=8),
												!l||4&d[1]||(d[5]=s),
												u&&Pi.apply(d[2]||(d[2]=[]),r),
												c&&ki.apply(d[3]||(d[3]=[]),i),
												d[1]|=e,
												se.apply(null,d);
												var f=1==e||17===e?o:K;
												return f([t,e,r,i,n,s])
											}
											function ae(t){
												return tn[t]
											}
											function he(){
												var t=(t=e.indexOf)===mr?i:t;
												return t
											}
											function le(t){
												return"function"==typeof t&&Ai.test(t)
											}
											function ue(t){
												var e,r;
												return t&&Ci.call(t)==V&&(e=t.constructor,!Me(e)||e instanceof e)?(an(t,function(t,e){r=e}),"undefined"==typeof r||Bi.call(t,r)):!1
											}
											function ce(t){
												return en[t]
											}
											function de(t){
												return t&&"object"==typeof t&&"number"==typeof t.length&&Ci.call(t)==k||!1
											}
											function fe(t,e,r,i){
												return"boolean"!=typeof e&&null!=e&&(i=r,r=e,e=!1),
												m(t,e,"function"==typeof r&&S(r,i,1))
											}
											function pe(t,e,r){
												return m(t,!0,"function"==typeof e&&S(e,r,1))
											}
											function ge(t,e){
												var r=x(t);
												return e?on(r,e):r
											}
											function ve(t,r,i){
												var n;
												return r=e.createCallback(r,i,3),
												hn(t,function(t,e,i){
													return r(t,e,i)?(n=e,!1):void 0
												}),n
											}
											function me(t,r,i){
												var n;
												return r=e.createCallback(r,i,3),
												ye(t,function(t,e,i){
													return r(t,e,i)?(n=e,!1):void 0
												}),n
											}
											function xe(t,e,r){
												var i=[];
												an(t,function(t,e){
													i.push(e,t)
												});
												var n=i.length;
												for(e=S(e,r,3);n--&&e(i[n--],i[n],t)!==!1;);
													return t
											}
											function ye(t,e,r){
												var i=Zi(t),
												n=i.length;
												for(e=S(e,r,3);n--;){
													var o=i[n];
													if(e(t[o],o,t)===!1)
														break
												}
												return t
											}
											function be(t){
												var e=[];
												return an(t,function(t,r){
													Me(t)&&e.push(r)
												}),
												e.sort()
											}
											function Te(t,e){
												return t?Bi.call(t,e):!1
											}
											function Se(t){
												for(var e=-1,r=Zi(t),i=r.length,n={};++e<i;)
													{
														var o=r[e];n[t[o]]=o
													}
													return n
												}
												function we(t){
													return t===!0||t===!1||t&&"object"==typeof t&&Ci.call(t)==N||!1
												}
												function Ee(t){
													return t&&"object"==typeof t&&Ci.call(t)==U||!1
												}
												function _e(t){
													return t&&1===t.nodeType||!1
												}
												function Ce(t){
													var e=!0;
													if(!t)return e;
													var r=Ci.call(t),
													i=t.length;
													return r==G||r==X||r==k||r==V&&"number"==typeof i&&Me(t.splice)?!i:(hn(t,function(){
														return e=!1}),e)
												}
												function Ae(t,e,r,i){
													return te(t,e,"function"==typeof r&&S(r,i,2))
												}
												function Re(t){
													return ji(t)&&!Wi(parseFloat(t))
												}
												function Me(t){
													return"function"==typeof t
												}
												function Le(t){
													return!(!t||!$[typeof t])
												}
												function Fe(t){
													return Be(t)&&t!=+t
												}
												function Ie(t){
													return null===t
												}
												function Be(t){
													return"number"==typeof t||t&&"object"==typeof t&&Ci.call(t)==W||!1
												}
												function Pe(t){
													return t&&"object"==typeof t&&Ci.call(t)==Y||!1
												}
												function Oe(t){
													return"string"==typeof t||t&&"object"==typeof t&&Ci.call(t)==X||!1
												}
												function De(t){
													return"undefined"==typeof t
												}
												function ke(t,r,i){
													var n={};
													return r=e.createCallback(r,i,3),
													hn(t,function(t,e,i){
														n[e]=r(t,e,i)}),n
												}
												function Ge(t){
													var e=arguments,
													r=2;
													if(!Le(t))
														return t;
													if("number"!=typeof e[2]&&(r=e.length),r>3&&"function"==typeof e[r-2])
														var i=S(e[--r-1],e[r--],2);
													else r>2&&"function"==typeof e[r-1]&&(i=e[--r]);
													for(var n=p(arguments,1,r),o=-1,s=u(),a=u();++o<r;)
														ee(t,n[o],i,s,a);
													return d(s),d(a),t
												}
												function Ne(t,r,i){
													var n={};
													if("function"!=typeof r){
														var o=[];
														an(t,function(t,e){
															o.push(e)
														}),
														o=J(o,Z(arguments,!0,!1,1));
														for(var s=-1,a=o.length;++s<a;){
															var h=o[s];
															n[h]=t[h]
														}
													}
													else r=e.createCallback(r,i,3),
														an(t,function(t,e,i){
															r(t,e,i)||(n[e]=t)
														});
													return n
												}
												function Ue(t){
													for(var e=-1,r=Zi(t),i=r.length,n=fi(i);++e<i;){
														var o=r[e];
														n[e]=[o,t[o]]
													}
													return n
												}
												function je(t,r,i){
													var n={};
													if("function"!=typeof r)
														for(var o=-1,s=Z(arguments,!0,!1,1),a=Le(t)?s.length:0;++o<a;){
															var h=s[o];
															h in t&&(n[h]=t[h])
														}
														else r=e.createCallback(r,i,3),an(t,function(t,e,i){
															r(t,e,i)&&(n[e]=t)
														});
															return n
														}
														function We(t,r,i,n){
															var o=Qi(t);
															if(null==i)
																if(o)
																	i=[];
																else{
																	var s=t&&t.constructor,
																	a=s&&s.prototype;
																	i=x(a)
																}
																return r&&(r=e.createCallback(r,n,4),(o?Ke:hn)(t,function(t,e,n){
																	return r(i,t,e,n)})),i
															}
															function Ve(t){
																for(var e=-1,r=Zi(t),i=r.length,n=fi(i);++e<i;)
																	n[e]=t[r[e]];
																	return n
																}
																function Ye(t){
																	for(var e=arguments,r=-1,i=Z(e,!0,!1,1),n=e[2]&&e[2][e[1]]===t?1:i.length,o=fi(n);++r<n;)
																		o[r]=t[i[r]];
																	return o
																}
																function Xe(t,e,r){
																	var i=-1,
																	n=he(),
																	o=t?t.length:0,
																	s=!1;
																	return r=(0>r?Yi(0,o+r):r)||0,Qi(t)?s=n(t,e,r)>-1:"number"==typeof o?s=(Oe(t)?t.indexOf(e,r):n(t,e,r))>-1:hn(t,function(t){
																		return
																		++i>=r?!(s=t===e):void 0
																	}),s
																}
																function ze(t,r,i){
																	var n=!0;r=e.createCallback(r,i,3);
																	var o=-1,
																	s=t?t.length:0;
																	if("number"==typeof s)
																		for(;++o<s&&(n=!!r(t[o],o,t)););
																			else hn(t,function(t,e,i){
																				return n=!!r(t,e,i)
																			});
																				return n
																			}
																			function He(t,r,i){
																				var n=[];r=e.createCallback(r,i,3);var o=-1,s=t?t.length:0;if("number"==typeof s)for(;++o<s;){var a=t[o];r(a,o,t)&&n.push(a)}else hn(t,function(t,e,i){r(t,e,i)&&n.push(t)});return n}function qe(t,r,i){r=e.createCallback(r,i,3);var n=-1,o=t?t.length:0;if("number"!=typeof o){var s;return hn(t,function(t,e,i){return r(t,e,i)?(s=t,!1):void 0}),s}for(;++n<o;){var a=t[n];if(r(a,n,t))return a}}function $e(t,r,i){var n;return r=e.createCallback(r,i,3),Qe(t,function(t,e,i){return r(t,e,i)?(n=t,!1):void 0}),n}function Ke(t,e,r){var i=-1,n=t?t.length:0;if(e=e&&"undefined"==typeof r?e:S(e,r,3),"number"==typeof n)for(;++i<n&&e(t[i],i,t)!==!1;);else hn(t,e);return t}function Qe(t,e,r){var i=t?t.length:0;if(e=e&&"undefined"==typeof r?e:S(e,r,3),"number"==typeof i)for(;i--&&e(t[i],i,t)!==!1;);else{var n=Zi(t);i=n.length,hn(t,function(t,r,o){return r=n?n[--i]:--i,e(o[r],r,o)})}return t}function Je(t,e){var r=p(arguments,2),i=-1,n="function"==typeof e,o=t?t.length:0,s=fi("number"==typeof o?o:0);return Ke(t,function(t){s[++i]=(n?e:t[e]).apply(t,r)}),s}function Ze(t,r,i){var n=-1,o=t?t.length:0;if(r=e.createCallback(r,i,3),"number"==typeof o)for(var s=fi(o);++n<o;)s[n]=r(t[n],n,t);else s=[],hn(t,function(t,e,i){s[++n]=r(t,e,i)});return s}function tr(t,r,i){var n=-1/0,o=n;if("function"!=typeof r&&i&&i[r]===t&&(r=null),null==r&&Qi(t))for(var a=-1,h=t.length;++a<h;){var l=t[a];l>o&&(o=l)}else r=null==r&&Oe(t)?s:e.createCallback(r,i,3),Ke(t,function(t,e,i){var s=r(t,e,i);s>n&&(n=s,o=t)});return o}function er(t,r,i){var n=1/0,o=n;if("function"!=typeof r&&i&&i[r]===t&&(r=null),null==r&&Qi(t))for(var a=-1,h=t.length;++a<h;){var l=t[a];o>l&&(o=l)}else r=null==r&&Oe(t)?s:e.createCallback(r,i,3),Ke(t,function(t,e,i){var s=r(t,e,i);n>s&&(n=s,o=t)});return o}function rr(t,r,i,n){if(!t)return i;var o=arguments.length<3;r=e.createCallback(r,n,4);var s=-1,a=t.length;if("number"==typeof a)for(o&&(i=t[++s]);++s<a;)i=r(i,t[s],s,t);else hn(t,function(t,e,n){i=o?(o=!1,t):r(i,t,e,n)});return i}function ir(t,r,i,n){var o=arguments.length<3;return r=e.createCallback(r,n,4),Qe(t,function(t,e,n){i=o?(o=!1,t):r(i,t,e,n)}),i}function nr(t,r,i){return r=e.createCallback(r,i,3),He(t,function(t,e,i){return!r(t,e,i)})}function or(t,e,r){if(t&&"number"!=typeof t.length&&(t=Ve(t)),null==e||r)return t?t[ie(0,t.length-1)]:v;var i=sr(t);return i.length=Xi(Yi(0,e),i.length),i}function sr(t){var e=-1,r=t?t.length:0,i=fi("number"==typeof r?r:0);return Ke(t,function(t){var r=ie(0,++e);i[e]=i[r],i[r]=t}),i}function ar(t){var e=t?t.length:0;return"number"==typeof e?e:Zi(t).length}function hr(t,r,i){var n;r=e.createCallback(r,i,3);var o=-1,s=t?t.length:0;if("number"==typeof s)for(;++o<s&&!(n=r(t[o],o,t)););else hn(t,function(t,e,i){return!(n=r(t,e,i))});return!!n}function lr(t,r,i){var n=-1,o=Qi(r),s=t?t.length:0,h=fi("number"==typeof s?s:0);for(o||(r=e.createCallback(r,i,3)),Ke(t,function(t,e,i){var s=h[++n]=c();o?s.criteria=Ze(r,function(e){return t[e]}):(s.criteria=u())[0]=r(t,e,i),s.index=n,s.value=t}),s=h.length,h.sort(a);s--;){var l=h[s];h[s]=l.value,o||d(l.criteria),f(l)}return h}function ur(t){return t&&"number"==typeof t.length?p(t):Ve(t)}function cr(t){for(var e=-1,r=t?t.length:0,i=[];++e<r;){var n=t[e];n&&i.push(n)}return i}function dr(t){return J(t,Z(arguments,!0,!0,1))}function fr(t,r,i){var n=-1,o=t?t.length:0;for(r=e.createCallback(r,i,3);++n<o;)if(r(t[n],n,t))return n;return-1}function pr(t,r,i){var n=t?t.length:0;for(r=e.createCallback(r,i,3);n--;)if(r(t[n],n,t))return n;return-1}function gr(t,r,i){var n=0,o=t?t.length:0;if("number"!=typeof r&&null!=r){var s=-1;for(r=e.createCallback(r,i,3);++s<o&&r(t[s],s,t);)n++}else if(n=r,null==n||i)return t?t[0]:v;return p(t,0,Xi(Yi(0,n),o))}function vr(t,e,r,i){return"boolean"!=typeof e&&null!=e&&(i=r,r="function"!=typeof e&&i&&i[e]===t?null:e,e=!1),null!=r&&(t=Ze(t,r,i)),Z(t,e)}function mr(t,e,r){if("number"==typeof r){var n=t?t.length:0;r=0>r?Yi(0,n+r):r||0}else if(r){var o=Cr(t,e);return t[o]===e?o:-1}return i(t,e,r)}function xr(t,r,i){var n=0,o=t?t.length:0;if("number"!=typeof r&&null!=r){var s=o;for(r=e.createCallback(r,i,3);s--&&r(t[s],s,t);)n++}else n=null==r||i?1:r||n;return p(t,0,Xi(Yi(0,o-n),o))}function yr(){for(var t=[],e=-1,r=arguments.length,o=u(),s=he(),a=s===i,l=u();++e<r;){var c=arguments[e];(Qi(c)||de(c))&&(t.push(c),o.push(a&&c.length>=T&&h(e?t[e]:l)))}var p=t[0],g=-1,v=p?p.length:0,m=[];t:for(;++g<v;){var x=o[0];if(c=p[g],(x?n(x,c):s(l,c))<0){for(e=r,(x||l).push(c);--e;)if(x=o[e],(x?n(x,c):s(t[e],c))<0)continue t;m.push(c)}}for(;r--;)x=o[r],x&&f(x);return d(o),d(l),m}function br(t,r,i){var n=0,o=t?t.length:0;if("number"!=typeof r&&null!=r){var s=o;for(r=e.createCallback(r,i,3);s--&&r(t[s],s,t);)n++}else if(n=r,null==n||i)return t?t[o-1]:v;return p(t,Yi(0,o-n))}function Tr(t,e,r){var i=t?t.length:0;for("number"==typeof r&&(i=(0>r?Yi(0,i+r):Xi(r,i-1))+1);i--;)if(t[i]===e)return i;return-1}function Sr(t){for(var e=arguments,r=0,i=e.length,n=t?t.length:0;++r<i;)for(var o=-1,s=e[r];++o<n;)t[o]===s&&(Di.call(t,o--,1),n--);return t}function wr(t,e,r){t=+t||0,r="number"==typeof r?r:+r||1,null==e&&(e=t,t=0);for(var i=-1,n=Yi(0,Ri((e-t)/(r||1))),o=fi(n);++i<n;)o[i]=t,t+=r;return o}function Er(t,r,i){var n=-1,o=t?t.length:0,s=[];for(r=e.createCallback(r,i,3);++n<o;){var a=t[n];r(a,n,t)&&(s.push(a),Di.call(t,n--,1),o--)}return s}function _r(t,r,i){if("number"!=typeof r&&null!=r){var n=0,o=-1,s=t?t.length:0;for(r=e.createCallback(r,i,3);++o<s&&r(t[o],o,t);)n++}else n=null==r||i?1:Yi(0,r);return p(t,n)}function Cr(t,r,i,n){var o=0,s=t?t.length:o;for(i=i?e.createCallback(i,n,1):Qr,r=i(r);s>o;){var a=o+s>>>1;i(t[a])<r?o=a+1:s=a}return o}function Ar(){return ne(Z(arguments,!0,!0))}function Rr(t,r,i,n){return"boolean"!=typeof r&&null!=r&&(n=i,i="function"!=typeof r&&n&&n[r]===t?null:r,r=!1),null!=i&&(i=e.createCallback(i,n,3)),ne(t,r,i)}function Mr(t){return J(t,p(arguments,1))}function Lr(){for(var t=-1,e=arguments.length;++t<e;){var r=arguments[t];if(Qi(r)||de(r))var i=i?ne(J(i,r).concat(J(r,i))):r}return i||[]}function Fr(){for(var t=arguments.length>1?arguments:arguments[0],e=-1,r=t?tr(fn(t,"length")):0,i=fi(0>r?0:r);++e<r;)i[e]=fn(t,e);return i}function Ir(t,e){var r=-1,i=t?t.length:0,n={};for(e||!i||Qi(t[0])||(e=[]);++r<i;){var o=t[r];e?n[o]=e[r]:o&&(n[o[0]]=o[1])}return n}function Br(t,e){if(!Me(e))throw new Si;return function(){return--t<1?e.apply(this,arguments):void 0}}function Pr(t,e){return arguments.length>2?se(t,17,p(arguments,2),null,e):se(t,1,null,null,e)}function Or(t){for(var e=arguments.length>1?Z(arguments,!0,!1,1):be(t),r=-1,i=e.length;++r<i;){var n=e[r];t[n]=se(t[n],1,null,null,t)}return t}function Dr(t,e){return arguments.length>2?se(e,19,p(arguments,2),null,t):se(e,3,null,null,t)}function kr(){for(var t=arguments,e=t.length;e--;)if(!Me(t[e]))throw new Si;return function(){for(var e=arguments,r=t.length;r--;)e=[t[r].apply(this,e)];return e[0]}}function Gr(t,e){return e="number"==typeof e?e:+e||t.length,se(t,4,null,null,null,e)}function Nr(t,e,r){var i,n,o,s,a,h,l,u=0,c=!1,d=!0;if(!Me(t))throw new Si;if(e=Yi(0,e)||0,r===!0){var f=!0;d=!1}else Le(r)&&(f=r.leading,c="maxWait"in r&&(Yi(e,r.maxWait)||0),d="trailing"in r?r.trailing:d);var p=function(){var r=e-(gn()-s);if(0>=r){n&&Mi(n);var c=l;n=h=l=v,c&&(u=gn(),o=t.apply(a,i),h||n||(i=a=null))}else h=Oi(p,r)},g=function(){h&&Mi(h),n=h=l=v,(d||c!==e)&&(u=gn(),o=t.apply(a,i),h||n||(i=a=null))};return function(){if(i=arguments,s=gn(),a=this,l=d&&(h||!f),c===!1)var r=f&&!h;else{n||f||(u=s);var v=c-(s-u),m=0>=v;m?(n&&(n=Mi(n)),u=s,o=t.apply(a,i)):n||(n=Oi(g,v))}return m&&h?h=Mi(h):h||e===c||(h=Oi(p,e)),r&&(m=!0,o=t.apply(a,i)),!m||h||n||(i=a=null),o}}function Ur(t){if(!Me(t))throw new Si;var e=p(arguments,1);return Oi(function(){t.apply(v,e)},1)}function jr(t,e){if(!Me(t))throw new Si;var r=p(arguments,2);return Oi(function(){t.apply(v,r)},e)}function Wr(t,e){if(!Me(t))throw new Si;var r=function(){var i=r.cache,n=e?e.apply(this,arguments):b+arguments[0];return Bi.call(i,n)?i[n]:i[n]=t.apply(this,arguments)};return r.cache={},r}function Vr(t){var e,r;if(!Me(t))throw new Si;return function(){return e?r:(e=!0,r=t.apply(this,arguments),t=null,r)}}function Yr(t){return se(t,16,p(arguments,1))}function Xr(t){return se(t,32,null,p(arguments,1))}function zr(t,e,r){var i=!0,n=!0;if(!Me(t))throw new Si;return r===!1?i=!1:Le(r)&&(i="leading"in r?r.leading:i,n="trailing"in r?r.trailing:n),H.leading=i,H.maxWait=e,H.trailing=n,Nr(t,e,H)}function Hr(t,e){return se(e,16,[t])}function qr(t){return function(){return t}}function $r(t,e,r){var i=typeof t;if(null==t||"function"==i)return S(t,e,r);if("object"!=i)return ei(t);var n=Zi(t),o=n[0],s=t[o];return 1!=n.length||s!==s||Le(s)?function(e){for(var r=n.length,i=!1;r--&&(i=te(e[n[r]],t[n[r]],null,!0)););return i}:function(t){var e=t[o];return s===e&&(0!==s||1/s==1/e)}}function Kr(t){return null==t?"":Ti(t).replace(nn,ae)}function Qr(t){return t}function Jr(t,i,n){var o=!0,s=i&&be(i);i&&(n||s.length)||(null==n&&(n=i),a=r,i=t,t=e,s=be(i)),n===!1?o=!1:Le(n)&&"chain"in n&&(o=n.chain);var a=t,h=Me(a);Ke(s,function(e){var r=t[e]=i[e];h&&(a.prototype[e]=function(){var e=this.__chain__,i=this.__wrapped__,n=[i];Pi.apply(n,arguments);var s=r.apply(t,n);if(o||e){if(i===s&&Le(s))return this;s=new a(s),s.__chain__=e}return s})})}function Zr(){return t._=_i,this}function ti(){}function ei(t){return function(e){return e[t]}}function ri(t,e,r){var i=null==t,n=null==e;if(null==r&&("boolean"==typeof t&&n?(r=t,t=1):n||"boolean"!=typeof e||(r=e,n=!0)),i&&n&&(e=1),t=+t||0,n?(e=t,t=0):e=+e||0,r||t%1||e%1){var o=Hi();return Xi(t+o*(e-t+parseFloat("1e-"+((o+"").length-1))),e)}return ie(t,e)}function ii(t,e){if(t){var r=t[e];return Me(r)?t[e]():r}}function ni(t,r,i){var n=e.templateSettings;t=Ti(t||""),i=sn({},i,n);var o,s=sn({},i.imports,n.imports),a=Zi(s),h=Ve(s),u=0,c=i.interpolate||I,d="__p += '",f=bi((i.escape||I).source+"|"+c.source+"|"+(c===L?A:I).source+"|"+(i.evaluate||I).source+"|$","g");t.replace(f,function(e,r,i,n,s,a){return i||(i=n),d+=t.slice(u,a).replace(P,l),r&&(d+="' +\n__e("+r+") +\n'"),s&&(o=!0,d+="';\n"+s+";\n__p += '"),i&&(d+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"),u=a+e.length,e}),d+="';\n";var p=i.variable,g=p;g||(p="obj",d="with ("+p+") {\n"+d+"\n}\n"),d=(o?d.replace(E,""):d).replace(_,"$1").replace(C,"$1;"),d="function("+p+") {\n"+(g?"":p+" || ("+p+" = {});\n")+"var __t, __p = '', __e = _.escape"+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var m="\n/*\n//# sourceURL="+(i.sourceURL||"/lodash/template/source["+D++ +"]")+"\n*/";try{var x=vi(a,"return "+d+m).apply(v,h)}catch(y){throw y.source=d,y}return r?x(r):(x.source=d,x)}function oi(t,e,r){t=(t=+t)>-1?t:0;var i=-1,n=fi(t);for(e=S(e,r,1);++i<t;)n[i]=e(i);return n}function si(t){return null==t?"":Ti(t).replace(rn,ce)}function ai(t){var e=++y;return Ti(null==t?"":t)+e}function hi(t){return t=new r(t),t.__chain__=!0,t}function li(t,e){return e(t),t}function ui(){return this.__chain__=!0,this}function ci(){return Ti(this.__wrapped__)}function di(){return this.__wrapped__}t=t?re.defaults(Q.Object(),t,re.pick(Q,O)):Q;var fi=t.Array,pi=t.Boolean,gi=t.Date,vi=t.Function,mi=t.Math,xi=t.Number,yi=t.Object,bi=t.RegExp,Ti=t.String,Si=t.TypeError,wi=[],Ei=yi.prototype,_i=t._,Ci=Ei.toString,Ai=bi("^"+Ti(Ci).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Ri=mi.ceil,Mi=t.clearTimeout,Li=mi.floor,Fi=vi.prototype.toString,Ii=le(Ii=yi.getPrototypeOf)&&Ii,Bi=Ei.hasOwnProperty,Pi=wi.push,Oi=t.setTimeout,Di=wi.splice,ki=wi.unshift,Gi=function(){try{var t={},e=le(e=yi.defineProperty)&&e,r=e(t,t,t)&&e}catch(i){}return r}(),Ni=le(Ni=yi.create)&&Ni,Ui=le(Ui=fi.isArray)&&Ui,ji=t.isFinite,Wi=t.isNaN,Vi=le(Vi=yi.keys)&&Vi,Yi=mi.max,Xi=mi.min,zi=t.parseInt,Hi=mi.random,qi={};qi[G]=fi,qi[N]=pi,qi[U]=gi,qi[j]=vi,qi[V]=yi,qi[W]=xi,qi[Y]=bi,qi[X]=Ti,r.prototype=e.prototype;var $i=e.support={};$i.funcDecomp=!le(t.WinRTError)&&B.test(g),$i.funcNames="string"==typeof vi.name,e.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:L,variable:"",imports:{_:e}},Ni||(x=function(){function e(){}return function(r){if(Le(r)){e.prototype=r;var i=new e;e.prototype=null}return i||t.Object()}}());var Ki=Gi?function(t,e){q.value=e,Gi(t,"__bindData__",q)}:ti,Qi=Ui||function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Ci.call(t)==G||!1},Ji=function(t){var e,r=t,i=[];if(!r)return i;if(!$[typeof t])return i;for(e in r)Bi.call(r,e)&&i.push(e);return i},Zi=Vi?function(t){return Le(t)?Vi(t):[]}:Ji,tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},en=Se(tn),rn=bi("("+Zi(en).join("|")+")","g"),nn=bi("["+Zi(tn).join("")+"]","g"),on=function(t,e,r){var i,n=t,o=n;if(!n)return o;var s=arguments,a=0,h="number"==typeof r?2:s.length;if(h>3&&"function"==typeof s[h-2])var l=S(s[--h-1],s[h--],2);else h>2&&"function"==typeof s[h-1]&&(l=s[--h]);for(;++a<h;)if(n=s[a],n&&$[typeof n])for(var u=-1,c=$[typeof n]&&Zi(n),d=c?c.length:0;++u<d;)i=c[u],o[i]=l?l(o[i],n[i]):n[i];return o},sn=function(t,e,r){var i,n=t,o=n;if(!n)return o;for(var s=arguments,a=0,h="number"==typeof r?2:s.length;++a<h;)if(n=s[a],n&&$[typeof n])for(var l=-1,u=$[typeof n]&&Zi(n),c=u?u.length:0;++l<c;)i=u[l],"undefined"==typeof o[i]&&(o[i]=n[i]);return o},an=function(t,e,r){var i,n=t,o=n;if(!n)return o;if(!$[typeof n])return o;e=e&&"undefined"==typeof r?e:S(e,r,3);for(i in n)if(e(n[i],i,t)===!1)return o;return o},hn=function(t,e,r){var i,n=t,o=n;if(!n)return o;if(!$[typeof n])return o;e=e&&"undefined"==typeof r?e:S(e,r,3);for(var s=-1,a=$[typeof n]&&Zi(n),h=a?a.length:0;++s<h;)if(i=a[s],e(n[i],i,t)===!1)return o;return o},ln=Ii?function(t){if(!t||Ci.call(t)!=V)return!1;var e=t.valueOf,r=le(e)&&(r=Ii(e))&&Ii(r);return r?t==r||Ii(t)==r:ue(t)}:ue,un=oe(function(t,e,r){Bi.call(t,r)?t[r]++:t[r]=1}),cn=oe(function(t,e,r){(Bi.call(t,r)?t[r]:t[r]=[]).push(e)}),dn=oe(function(t,e,r){t[r]=e}),fn=Ze,pn=He,gn=le(gn=gi.now)&&gn||function(){return(new gi).getTime()},vn=8==zi(w+"08")?zi:function(t,e){return zi(Oe(t)?t.replace(F,""):t,e||0)};return e.after=Br,e.assign=on,e.at=Ye,e.bind=Pr,e.bindAll=Or,e.bindKey=Dr,e.chain=hi,e.compact=cr,e.compose=kr,e.constant=qr,e.countBy=un,e.create=ge,e.createCallback=$r,e.curry=Gr,e.debounce=Nr,e.defaults=sn,e.defer=Ur,e.delay=jr,e.difference=dr,e.filter=He,e.flatten=vr,e.forEach=Ke,e.forEachRight=Qe,e.forIn=an,e.forInRight=xe,e.forOwn=hn,e.forOwnRight=ye,e.functions=be,e.groupBy=cn,e.indexBy=dn,e.initial=xr,e.intersection=yr,e.invert=Se,e.invoke=Je,e.keys=Zi,e.map=Ze,e.mapValues=ke,e.max=tr,e.memoize=Wr,e.merge=Ge,e.min=er,e.omit=Ne,e.once=Vr,e.pairs=Ue,e.partial=Yr,e.partialRight=Xr,e.pick=je,e.pluck=fn,e.property=ei,e.pull=Sr,e.range=wr,e.reject=nr,e.remove=Er,e.rest=_r,e.shuffle=sr,e.sortBy=lr,e.tap=li,e.throttle=zr,e.times=oi,e.toArray=ur,e.transform=We,e.union=Ar,e.uniq=Rr,e.values=Ve,e.where=pn,e.without=Mr,e.wrap=Hr,e.xor=Lr,e.zip=Fr,e.zipObject=Ir,e.collect=Ze,e.drop=_r,e.each=Ke,e.eachRight=Qe,e.extend=on,e.methods=be,e.object=Ir,e.select=He,e.tail=_r,e.unique=Rr,e.unzip=Fr,Jr(e),e.clone=fe,e.cloneDeep=pe,e.contains=Xe,e.escape=Kr,e.every=ze,e.find=qe,e.findIndex=fr,e.findKey=ve,e.findLast=$e,e.findLastIndex=pr,e.findLastKey=me,e.has=Te,e.identity=Qr,e.indexOf=mr,e.isArguments=de,e.isArray=Qi,e.isBoolean=we,e.isDate=Ee,e.isElement=_e,e.isEmpty=Ce,e.isEqual=Ae,e.isFinite=Re,e.isFunction=Me,e.isNaN=Fe,e.isNull=Ie,e.isNumber=Be,e.isObject=Le,e.isPlainObject=ln,e.isRegExp=Pe,e.isString=Oe,e.isUndefined=De,e.lastIndexOf=Tr,e.mixin=Jr,e.noConflict=Zr,e.noop=ti,e.now=gn,e.parseInt=vn,e.random=ri,e.reduce=rr,e.reduceRight=ir,e.result=ii,e.runInContext=g,e.size=ar,e.some=hr,e.sortedIndex=Cr,e.template=ni,e.unescape=si,e.uniqueId=ai,e.all=ze,e.any=hr,e.detect=qe,e.findWhere=qe,e.foldl=rr,e.foldr=ir,e.include=Xe,e.inject=rr,Jr(function(){var t={};return hn(e,function(r,i){e.prototype[i]||(t[i]=r)}),t}(),!1),e.first=gr,e.last=br,e.sample=or,e.take=gr,e.head=gr,hn(e,function(t,i){var n="sample"!==i;e.prototype[i]||(e.prototype[i]=function(e,i){var o=this.__chain__,s=t(this.__wrapped__,e,i);return o||null!=e&&(!i||n&&"function"==typeof e)?new r(s,o):s})}),e.VERSION="2.4.1",e.prototype.chain=ui,e.prototype.toString=ci,e.prototype.value=di,e.prototype.valueOf=di,Ke(["join","pop","shift"],function(t){var i=wi[t];e.prototype[t]=function(){var t=this.__chain__,e=i.apply(this.__wrapped__,arguments);return t?new r(e,t):e}}),Ke(["push","reverse","sort","unshift"],function(t){var r=wi[t];e.prototype[t]=function(){return r.apply(this.__wrapped__,arguments),this}}),Ke(["concat","slice","splice"],function(t){var i=wi[t];e.prototype[t]=function(){return new r(i.apply(this.__wrapped__,arguments),this.__chain__)}}),e}var v,m=[],x=[],y=0,b=+new Date+"",T=75,S=40,w=" 	\f?????\n\r\u2028\u2029????????????????????????????????????????????????",E=/\b__p \+= '';/g,_=/\b(__p \+=) '' \+/g,C=/(__e\(.*?\)|\b__t\)) \+\n'';/g,A=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,R=/\w*$/,M=/^\s*function[ \n\r\t]+\w/,L=/<%=([\s\S]+?)%>/g,F=RegExp("^["+w+"]*0+(?=.$)"),I=/($^)/,B=/\bthis\b/,P=/['\n\r\t\u2028\u2029\\]/g,O=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],D=0,k="[object Arguments]",G="[object Array]",N="[object Boolean]",U="[object Date]",j="[object Function]",W="[object Number]",V="[object Object]",Y="[object RegExp]",X="[object String]",z={};z[j]=!1,z[k]=z[G]=z[N]=z[U]=z[W]=z[V]=z[Y]=z[X]=!0;var H={leading:!1,maxWait:0,trailing:!1},q={configurable:!1,enumerable:!1,value:null,writable:!1},$={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},K={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},Q=$[typeof window]&&window||this,J=$[typeof r]&&r&&!r.nodeType&&r,Z=$[typeof e]&&e&&!e.nodeType&&e,te=Z&&Z.exports===J&&J,ee=$[typeof t]&&t;!ee||ee.global!==ee&&ee.window!==ee||(Q=ee);var re=g();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Q._=re,define(function(){return re})):J&&Z?te?(Z.exports=re)._=re:J._=re:Q._=re}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,e){var r="precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\nuniform sampler2D uSampler;\r\nuniform vec4 noiseLevelRGBA;\r\n\r\n// The interval is from 0.0 to 1.0\r\nfloat rand(vec2 co) {\r\n      return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\r\n}\r\n\r\nvoid main(void) {\r\n      gl_FragColor = texture2D(uSampler, vTextureCoord);\r\n\r\n      float randomDelta = (rand(vTextureCoord) * 2.0) - 1.0;\r\n\r\n      gl_FragColor.r += noiseLevelRGBA.r * randomDelta;\r\n      gl_FragColor.g += noiseLevelRGBA.g * randomDelta;\r\n      gl_FragColor.b += noiseLevelRGBA.b * randomDelta;\r\n      gl_FragColor.a += noiseLevelRGBA.a * randomDelta;\r\n}",i=t("pixi.js"),n=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={noiseLevelRGBA:{type:"4fv",value:[.05,.05,.05,0]}},this.fragmentSrc=[r]};n.prototype=Object.create(i.AbstractFilter.prototype),n.prototype.constructor=n,Object.defineProperty(n.prototype,"noiseLevelRGBA",{get:function(){return this.uniforms.noiseLevelRGBA.value},set:function(t){this.uniforms.noiseLevelRGBA.value=t}}),e.exports=n},{"pixi.js":3}],3:[function(t,e,r){(function(){var t=this,i=i||{};i.WEBGL_RENDERER=0,i.CANVAS_RENDERER=1,i.VERSION="v1.6.1",i.blendModes={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},i.scaleModes={DEFAULT:0,LINEAR:0,NEAREST:1},i._UID=0,"undefined"!=typeof Float32Array?(i.Float32Array=Float32Array,i.Uint16Array=Uint16Array):(i.Float32Array=Array,i.Uint16Array=Array),i.INTERACTION_FREQUENCY=30,i.AUTO_PREVENT_DEFAULT=!0,i.RAD_TO_DEG=180/Math.PI,i.DEG_TO_RAD=Math.PI/180,i.dontSayHello=!1,i.sayHello=function(t){if(!i.dontSayHello){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var e=["%c %c %c Pixi.js "+i.VERSION+" - "+t+"  %c  %c  http://www.pixijs.com/  %c %c ???%c???%c??? ","background: #ff66a5","background: #ff66a5","color: #ff66a5; background: #030307;","background: #ff66a5","background: #ffc3dc","background: #ff66a5","color: #ff2424; background: #fff","color: #ff2424; background: #fff","color: #ff2424; background: #fff"];console.log.apply(console,e)}else window.console&&console.log("Pixi.js "+i.VERSION+" - http://www.pixijs.com/");i.dontSayHello=!0}},i.Point=function(t,e){this.x=t||0,this.y=e||0},i.Point.prototype.clone=function(){return new i.Point(this.x,this.y)},i.Point.prototype.set=function(t,e){this.x=t||0,this.y=e||(0!==e?this.x:0)},i.Point.prototype.constructor=i.Point,i.Rectangle=function(t,e,r,i){this.x=t||0,this.y=e||0,this.width=r||0,this.height=i||0},i.Rectangle.prototype.clone=function(){return new i.Rectangle(this.x,this.y,this.width,this.height)},i.Rectangle.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;var r=this.x;if(t>=r&&t<=r+this.width){var i=this.y;
if(e>=i&&e<=i+this.height)return!0}return!1},i.Rectangle.prototype.constructor=i.Rectangle,i.EmptyRectangle=new i.Rectangle(0,0,0,0),i.Polygon=function(t){if(t instanceof Array||(t=Array.prototype.slice.call(arguments)),"number"==typeof t[0]){for(var e=[],r=0,n=t.length;n>r;r+=2)e.push(new i.Point(t[r],t[r+1]));t=e}this.points=t},i.Polygon.prototype.clone=function(){for(var t=[],e=0;e<this.points.length;e++)t.push(this.points[e].clone());return new i.Polygon(t)},i.Polygon.prototype.contains=function(t,e){for(var r=!1,i=0,n=this.points.length-1;i<this.points.length;n=i++){var o=this.points[i].x,s=this.points[i].y,a=this.points[n].x,h=this.points[n].y,l=s>e!=h>e&&(a-o)*(e-s)/(h-s)+o>t;l&&(r=!r)}return r},i.Polygon.prototype.constructor=i.Polygon,i.Circle=function(t,e,r){this.x=t||0,this.y=e||0,this.radius=r||0},i.Circle.prototype.clone=function(){return new i.Circle(this.x,this.y,this.radius)},i.Circle.prototype.contains=function(t,e){if(this.radius<=0)return!1;var r=this.x-t,i=this.y-e,n=this.radius*this.radius;return r*=r,i*=i,n>=r+i},i.Circle.prototype.getBounds=function(){return new i.Rectangle(this.x-this.radius,this.y-this.radius,this.width,this.height)},i.Circle.prototype.constructor=i.Circle,i.Ellipse=function(t,e,r,i){this.x=t||0,this.y=e||0,this.width=r||0,this.height=i||0},i.Ellipse.prototype.clone=function(){return new i.Ellipse(this.x,this.y,this.width,this.height)},i.Ellipse.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;var r=(t-this.x)/this.width,i=(e-this.y)/this.height;return r*=r,i*=i,1>=r+i},i.Ellipse.prototype.getBounds=function(){return new i.Rectangle(this.x-this.width,this.y-this.height,this.width,this.height)},i.Ellipse.prototype.constructor=i.Ellipse,i.Matrix=function(){this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0},i.Matrix.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},i.Matrix.prototype.toArray=function(t){this.array||(this.array=new Float32Array(9));var e=this.array;return t?(e[0]=this.a,e[1]=this.c,e[2]=0,e[3]=this.b,e[4]=this.d,e[5]=0,e[6]=this.tx,e[7]=this.ty,e[8]=1):(e[0]=this.a,e[1]=this.b,e[2]=this.tx,e[3]=this.c,e[4]=this.d,e[5]=this.ty,e[6]=0,e[7]=0,e[8]=1),e},i.identityMatrix=new i.Matrix,i.determineMatrixArrayType=function(){return"undefined"!=typeof Float32Array?Float32Array:Array},i.Matrix2=i.determineMatrixArrayType(),i.DisplayObject=function(){this.position=new i.Point,this.scale=new i.Point(1,1),this.pivot=new i.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.hitArea=null,this.buttonMode=!1,this.renderable=!1,this.parent=null,this.stage=null,this.worldAlpha=1,this._interactive=!1,this.defaultCursor="pointer",this.worldTransform=new i.Matrix,this.color=[],this.dynamic=!0,this._sr=0,this._cr=1,this.filterArea=null,this._bounds=new i.Rectangle(0,0,1,1),this._currentBounds=null,this._mask=null,this._cacheAsBitmap=!1,this._cacheIsDirty=!1},i.DisplayObject.prototype.constructor=i.DisplayObject,i.DisplayObject.prototype.setInteractive=function(t){this.interactive=t},Object.defineProperty(i.DisplayObject.prototype,"interactive",{get:function(){return this._interactive},set:function(t){this._interactive=t,this.stage&&(this.stage.dirty=!0)}}),Object.defineProperty(i.DisplayObject.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0}}),Object.defineProperty(i.DisplayObject.prototype,"mask",{get:function(){return this._mask},set:function(t){this._mask&&(this._mask.isMask=!1),this._mask=t,this._mask&&(this._mask.isMask=!0)}}),Object.defineProperty(i.DisplayObject.prototype,"filters",{get:function(){return this._filters},set:function(t){if(t){for(var e=[],r=0;r<t.length;r++)for(var i=t[r].passes,n=0;n<i.length;n++)e.push(i[n]);this._filterBlock={target:this,filterPasses:e}}this._filters=t}}),Object.defineProperty(i.DisplayObject.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(t){this._cacheAsBitmap!==t&&(t?this._generateCachedSprite():this._destroyCachedSprite(),this._cacheAsBitmap=t)}}),i.DisplayObject.prototype.updateTransform=function(){this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation));var t=this.parent.worldTransform,e=this.worldTransform,r=this.pivot.x,i=this.pivot.y,n=this._cr*this.scale.x,o=-this._sr*this.scale.y,s=this._sr*this.scale.x,a=this._cr*this.scale.y,h=this.position.x-n*r-i*o,l=this.position.y-a*i-r*s,u=t.a,c=t.b,d=t.c,f=t.d;e.a=u*n+c*s,e.b=u*o+c*a,e.tx=u*h+c*l+t.tx,e.c=d*n+f*s,e.d=d*o+f*a,e.ty=d*h+f*l+t.ty,this.worldAlpha=this.alpha*this.parent.worldAlpha},i.DisplayObject.prototype.getBounds=function(t){return t=t,i.EmptyRectangle},i.DisplayObject.prototype.getLocalBounds=function(){return this.getBounds(i.identityMatrix)},i.DisplayObject.prototype.setStageReference=function(t){this.stage=t,this._interactive&&(this.stage.dirty=!0)},i.DisplayObject.prototype.generateTexture=function(t){var e=this.getLocalBounds(),r=new i.RenderTexture(0|e.width,0|e.height,t);return r.render(this,new i.Point(-e.x,-e.y)),r},i.DisplayObject.prototype.updateCache=function(){this._generateCachedSprite()},i.DisplayObject.prototype._renderCachedSprite=function(t){this._cachedSprite.worldAlpha=this.worldAlpha,t.gl?i.Sprite.prototype._renderWebGL.call(this._cachedSprite,t):i.Sprite.prototype._renderCanvas.call(this._cachedSprite,t)},i.DisplayObject.prototype._generateCachedSprite=function(){this._cacheAsBitmap=!1;var t=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.texture.resize(0|t.width,0|t.height);else{var e=new i.RenderTexture(0|t.width,0|t.height);this._cachedSprite=new i.Sprite(e),this._cachedSprite.worldTransform=this.worldTransform}var r=this._filters;this._filters=null,this._cachedSprite.filters=r,this._cachedSprite.texture.render(this,new i.Point(-t.x,-t.y)),this._cachedSprite.anchor.x=-(t.x/t.width),this._cachedSprite.anchor.y=-(t.y/t.height),this._filters=r,this._cacheAsBitmap=!0},i.DisplayObject.prototype._destroyCachedSprite=function(){this._cachedSprite&&(this._cachedSprite.texture.destroy(!0),this._cachedSprite=null)},i.DisplayObject.prototype._renderWebGL=function(t){t=t},i.DisplayObject.prototype._renderCanvas=function(t){t=t},Object.defineProperty(i.DisplayObject.prototype,"x",{get:function(){return this.position.x},set:function(t){this.position.x=t}}),Object.defineProperty(i.DisplayObject.prototype,"y",{get:function(){return this.position.y},set:function(t){this.position.y=t}}),i.DisplayObjectContainer=function(){i.DisplayObject.call(this),this.children=[]},i.DisplayObjectContainer.prototype=Object.create(i.DisplayObject.prototype),i.DisplayObjectContainer.prototype.constructor=i.DisplayObjectContainer,Object.defineProperty(i.DisplayObjectContainer.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var e=this.getLocalBounds().width;this.scale.x=0!==e?t/(e/this.scale.x):1,this._width=t}}),Object.defineProperty(i.DisplayObjectContainer.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var e=this.getLocalBounds().height;this.scale.y=0!==e?t/(e/this.scale.y):1,this._height=t}}),i.DisplayObjectContainer.prototype.addChild=function(t){return this.addChildAt(t,this.children.length)},i.DisplayObjectContainer.prototype.addChildAt=function(t,e){if(e>=0&&e<=this.children.length)return t.parent&&t.parent.removeChild(t),t.parent=this,this.children.splice(e,0,t),this.stage&&t.setStageReference(this.stage),t;throw new Error(t+" The index "+e+" supplied is out of bounds "+this.children.length)},i.DisplayObjectContainer.prototype.swapChildren=function(t,e){if(t!==e){var r=this.children.indexOf(t),i=this.children.indexOf(e);if(0>r||0>i)throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");this.children[r]=e,this.children[i]=t}},i.DisplayObjectContainer.prototype.getChildAt=function(t){if(t>=0&&t<this.children.length)return this.children[t];throw new Error("Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller")},i.DisplayObjectContainer.prototype.removeChild=function(t){return this.removeChildAt(this.children.indexOf(t))},i.DisplayObjectContainer.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return this.stage&&e.removeStageReference(),e.parent=void 0,this.children.splice(t,1),e},i.DisplayObjectContainer.prototype.removeChildren=function(t,e){var r=t||0,i="number"==typeof e?e:this.children.length,n=i-r;if(n>0&&i>=n){for(var o=this.children.splice(r,n),s=0;s<o.length;s++){var a=o[s];this.stage&&a.removeStageReference(),a.parent=void 0}return o}throw new Error("Range Error, numeric values are outside the acceptable range")},i.DisplayObjectContainer.prototype.updateTransform=function(){if(this.visible&&(i.DisplayObject.prototype.updateTransform.call(this),!this._cacheAsBitmap))for(var t=0,e=this.children.length;e>t;t++)this.children[t].updateTransform()},i.DisplayObjectContainer.prototype.getBounds=function(t){if(0===this.children.length)return i.EmptyRectangle;if(t){var e=this.worldTransform;this.worldTransform=t,this.updateTransform(),this.worldTransform=e}for(var r,n,o,s=1/0,a=1/0,h=-1/0,l=-1/0,u=!1,c=0,d=this.children.length;d>c;c++){var f=this.children[c];f.visible&&(u=!0,r=this.children[c].getBounds(t),s=s<r.x?s:r.x,a=a<r.y?a:r.y,

	n=5000+r.x,o=r.height+r.y,h=h>n?h:n,l=l>o?l:o)}if(!u)return i.EmptyRectangle;var p=this._bounds;return p.x=s,p.y=a,p.width=h-s,p.height=l-a,p},i.DisplayObjectContainer.prototype.getLocalBounds=function(){var t=this.worldTransform;this.worldTransform=i.identityMatrix;for(var e=0,r=this.children.length;r>e;e++)this.children[e].updateTransform();var n=this.getBounds();return this.worldTransform=t,n},i.DisplayObjectContainer.prototype.setStageReference=function(t){this.stage=t,this._interactive&&(this.stage.dirty=!0);for(var e=0,r=this.children.length;r>e;e++){var i=this.children[e];i.setStageReference(t)}},i.DisplayObjectContainer.prototype.removeStageReference=function(){for(var t=0,e=this.children.length;e>t;t++){var r=this.children[t];r.removeStageReference()}this._interactive&&(this.stage.dirty=!0),this.stage=null},i.DisplayObjectContainer.prototype._renderWebGL=function(t){if(this.visible&&!(this.alpha<=0)){if(this._cacheAsBitmap)return void this._renderCachedSprite(t);var e,r;if(this._mask||this._filters){for(this._filters&&(t.spriteBatch.flush(),t.filterManager.pushFilter(this._filterBlock)),this._mask&&(t.spriteBatch.stop(),t.maskManager.pushMask(this.mask,t),t.spriteBatch.start()),e=0,r=this.children.length;r>e;e++)this.children[e]._renderWebGL(t);t.spriteBatch.stop(),this._mask&&t.maskManager.popMask(this._mask,t),this._filters&&t.filterManager.popFilter(),t.spriteBatch.start()}else for(e=0,r=this.children.length;r>e;e++)this.children[e]._renderWebGL(t)}},i.DisplayObjectContainer.prototype._renderCanvas=function(t){if(this.visible!==!1&&0!==this.alpha){if(this._cacheAsBitmap)return void this._renderCachedSprite(t);this._mask&&t.maskManager.pushMask(this._mask,t.context);for(var e=0,r=this.children.length;r>e;e++){var i=this.children[e];i._renderCanvas(t)}this._mask&&t.maskManager.popMask(t.context)}},i.Sprite=function(t){i.DisplayObjectContainer.call(this),this.anchor=new i.Point,this.texture=t,this._width=0,this._height=0,this.tint=16777215,this.blendMode=i.blendModes.NORMAL,t.baseTexture.hasLoaded?this.onTextureUpdate():(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},i.Sprite.prototype=Object.create(i.DisplayObjectContainer.prototype),i.Sprite.prototype.constructor=i.Sprite,Object.defineProperty(i.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width},set:function(t){this.scale.x=t/this.texture.frame.width,this._width=t}}),Object.defineProperty(i.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height},set:function(t){this.scale.y=t/this.texture.frame.height,this._height=t}}),i.Sprite.prototype.setTexture=function(t){this.texture=t,this.cachedTint=16777215},i.Sprite.prototype.onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height)},i.Sprite.prototype.getBounds=function(t){var e=this.texture.frame.width,r=this.texture.frame.height,i=e*(1-this.anchor.x),n=e*-this.anchor.x,o=r*(1-this.anchor.y),s=r*-this.anchor.y,a=t||this.worldTransform,h=a.a,l=a.c,u=a.b,c=a.d,d=a.tx,f=a.ty,p=h*n+u*s+d,g=c*s+l*n+f,v=h*i+u*s+d,m=c*s+l*i+f,x=h*i+u*o+d,y=c*o+l*i+f,b=h*n+u*o+d,T=c*o+l*n+f,S=-1/0,w=-1/0,E=1/0,_=1/0;E=E>p?p:E,E=E>v?v:E,E=E>x?x:E,E=E>b?b:E,_=_>g?g:_,_=_>m?m:_,_=_>y?y:_,_=_>T?T:_,S=p>S?p:S,S=v>S?v:S,S=x>S?x:S,S=b>S?b:S,w=g>w?g:w,w=m>w?m:w,w=y>w?y:w,w=T>w?T:w;var C=this._bounds;return C.x=E,C.width=S-E,C.y=_,C.height=w-_,this._currentBounds=C,C},i.Sprite.prototype._renderWebGL=function(t){if(this.visible&&!(this.alpha<=0)){var e,r;if(this._mask||this._filters){var i=t.spriteBatch;for(this._filters&&(i.flush(),t.filterManager.pushFilter(this._filterBlock)),this._mask&&(i.stop(),t.maskManager.pushMask(this.mask,t),i.start()),i.render(this),e=0,r=this.children.length;r>e;e++)this.children[e]._renderWebGL(t);i.stop(),this._mask&&t.maskManager.popMask(this._mask,t),this._filters&&t.filterManager.popFilter(),i.start()}else for(t.spriteBatch.render(this),e=0,r=this.children.length;r>e;e++)this.children[e]._renderWebGL(t)}},i.Sprite.prototype._renderCanvas=function(t){if(this.visible!==!1&&0!==this.alpha){if(this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,t.context.globalCompositeOperation=i.blendModesCanvas[t.currentBlendMode]),this._mask&&t.maskManager.pushMask(this._mask,t.context),this.texture.valid){t.context.globalAlpha=this.worldAlpha,t.roundPixels?t.context.setTransform(this.worldTransform.a,this.worldTransform.c,this.worldTransform.b,this.worldTransform.d,0|this.worldTransform.tx,0|this.worldTransform.ty):t.context.setTransform(this.worldTransform.a,this.worldTransform.c,this.worldTransform.b,this.worldTransform.d,this.worldTransform.tx,this.worldTransform.ty),t.smoothProperty&&t.scaleMode!==this.texture.baseTexture.scaleMode&&(t.scaleMode=this.texture.baseTexture.scaleMode,t.context[t.smoothProperty]=t.scaleMode===i.scaleModes.LINEAR);var e=this.texture.trim?this.texture.trim.x-this.anchor.x*this.texture.trim.width:this.anchor.x*-this.texture.frame.width,r=this.texture.trim?this.texture.trim.y-this.anchor.y*this.texture.trim.height:this.anchor.y*-this.texture.frame.height;16777215!==this.tint?(this.cachedTint!==this.tint&&(this.cachedTint=this.tint,this.tintedTexture=i.CanvasTinter.getTintedTexture(this,this.tint)),t.context.drawImage(this.tintedTexture,0,0,this.texture.crop.width,this.texture.crop.height,e,r,this.texture.crop.width,this.texture.crop.height)):t.context.drawImage(this.texture.baseTexture.source,this.texture.crop.x,this.texture.crop.y,this.texture.crop.width,this.texture.crop.height,e,r,this.texture.crop.width,this.texture.crop.height)}for(var n=0,o=this.children.length;o>n;n++)this.children[n]._renderCanvas(t);this._mask&&t.maskManager.popMask(t.context)}},i.Sprite.fromFrame=function(t){var e=i.TextureCache[t];if(!e)throw new Error('The frameId "'+t+'" does not exist in the texture cache'+this);return new i.Sprite(e)},i.Sprite.fromImage=function(t,e,r){var n=i.Texture.fromImage(t,e,r);return new i.Sprite(n)},i.SpriteBatch=function(t){i.DisplayObjectContainer.call(this),this.textureThing=t,this.ready=!1},i.SpriteBatch.prototype=Object.create(i.DisplayObjectContainer.prototype),i.SpriteBatch.constructor=i.SpriteBatch,i.SpriteBatch.prototype.initWebGL=function(t){this.fastSpriteBatch=new i.WebGLFastSpriteBatch(t),this.ready=!0},i.SpriteBatch.prototype.updateTransform=function(){i.DisplayObject.prototype.updateTransform.call(this)},i.SpriteBatch.prototype._renderWebGL=function(t){!this.visible||this.alpha<=0||!this.children.length||(this.ready||this.initWebGL(t.gl),t.spriteBatch.stop(),t.shaderManager.setShader(t.shaderManager.fastShader),this.fastSpriteBatch.begin(this,t),this.fastSpriteBatch.render(this),t.spriteBatch.start())},i.SpriteBatch.prototype._renderCanvas=function(t){var e=t.context;e.globalAlpha=this.worldAlpha,i.DisplayObject.prototype.updateTransform.call(this);for(var r=this.worldTransform,n=!0,o=0;o<this.children.length;o++){var s=this.children[o];if(s.visible){var a=s.texture,h=a.frame;if(e.globalAlpha=this.worldAlpha*s.alpha,s.rotation%(2*Math.PI)===0)n&&(e.setTransform(r.a,r.c,r.b,r.d,r.tx,r.ty),n=!1),e.drawImage(a.baseTexture.source,h.x,h.y,h.width,h.height,s.anchor.x*-h.width*s.scale.x+s.position.x+.5|0,s.anchor.y*-h.height*s.scale.y+s.position.y+.5|0,h.width*s.scale.x,h.height*s.scale.y);else{n||(n=!0),i.DisplayObject.prototype.updateTransform.call(s);var l=s.worldTransform;t.roundPixels?e.setTransform(l.a,l.c,l.b,l.d,0|l.tx,0|l.ty):e.setTransform(l.a,l.c,l.b,l.d,l.tx,l.ty),e.drawImage(a.baseTexture.source,h.x,h.y,h.width,h.height,s.anchor.x*-h.width+.5|0,s.anchor.y*-h.height+.5|0,h.width,h.height)}}}},i.MovieClip=function(t){i.Sprite.call(this,t[0]),this.textures=t,this.animationSpeed=1,this.loop=!0,this.onComplete=null,this.currentFrame=0,this.playing=!1},i.MovieClip.prototype=Object.create(i.Sprite.prototype),i.MovieClip.prototype.constructor=i.MovieClip,Object.defineProperty(i.MovieClip.prototype,"totalFrames",{get:function(){return this.textures.length}}),i.MovieClip.prototype.stop=function(){this.playing=!1},i.MovieClip.prototype.play=function(){this.playing=!0},i.MovieClip.prototype.gotoAndStop=function(t){this.playing=!1,this.currentFrame=t;var e=this.currentFrame+.5|0;this.setTexture(this.textures[e%this.textures.length])},i.MovieClip.prototype.gotoAndPlay=function(t){this.currentFrame=t,this.playing=!0},i.MovieClip.prototype.updateTransform=function(){if(i.Sprite.prototype.updateTransform.call(this),this.playing){this.currentFrame+=this.animationSpeed;var t=this.currentFrame+.5|0;this.currentFrame=this.currentFrame%this.textures.length,this.loop||t<this.textures.length?this.setTexture(this.textures[t%this.textures.length]):t>=this.textures.length&&(this.gotoAndStop(this.textures.length-1),this.onComplete&&this.onComplete())}},i.MovieClip.fromFrames=function(t){for(var e=[],r=0;r<t.length;r++)e.push(new i.Texture.fromFrame(t[r]));return new i.MovieClip(e)},i.MovieClip.fromImages=function(t){for(var e=[],r=0;r<t.length;r++)e.push(new i.Texture.fromImage(t[r]));return new i.MovieClip(e)},i.FilterBlock=function(){this.visible=!0,this.renderable=!0},i.Text=function(t,e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),i.Sprite.call(this,i.Texture.fromCanvas(this.canvas)),this.setText(t),this.setStyle(e)},i.Text.prototype=Object.create(i.Sprite.prototype),
i.Text.prototype.constructor=i.Text,
Object.defineProperty(i.Text.prototype,"width",{
	get:function(){
	return this.dirty&&(this.updateText(),
		this.dirty=!1),
	this.scale.x*this.texture.frame.width
},
set:function(t){
	this.scale.x=t/this.texture.frame.width,
	this._width=t
}
}),
Object.defineProperty(i.Text.prototype,"height",{
	get:function(){
		return this.dirty&&(this.updateText(),this.dirty=!1),
		this.scale.y*this.texture.frame.height
	},
	set:function(t){
		this.scale.y=t/this.texture.frame.height,
		this._height=t
	}
}),
i.Text.prototype.setStyle=function(t){
	t=t||{},
	t.font=t.font||"bold 20pt Arial",
	t.fill=t.fill||"black",
	t.align=t.align||"left",
	t.stroke=t.stroke||"black",
	t.strokeThickness=t.strokeThickness||0,
	t.wordWrap=t.wordWrap||!1,
	t.wordWrapWidth=t.wordWrapWidth||100,
	t.wordWrapWidth=t.wordWrapWidth||100,
	t.dropShadow=t.dropShadow||!1,
	t.dropShadowAngle=t.dropShadowAngle||Math.PI/6,
	t.dropShadowDistance=t.dropShadowDistance||4,
	t.dropShadowColor=t.dropShadowColor||"black",
	this.style=t,
	this.dirty=!0
},
i.Text.prototype.setText=function(t){
	this.text=t.toString()||" ",this.dirty=!0
},

i.Text.prototype.updateText=function(){
	this.context.font=this.style.font;
	var t=this.text;
	this.style.wordWrap&&(t=this.wordWrap(this.text));
	for(var e=t.split(/(?:\r\n|\r|\n)/),r=[],i=0,n=0;n<e.length;n++){
		var o=this.context.measureText(e[n]).width;
		r[n]=o,
		i=Math.max(i,o)
	}
	var s=i+this.style.strokeThickness;
	this.style.dropShadow&&(s+=this.style.dropShadowDistance),
	this.canvas.width=8000;
	//s+this.context.lineWidth;
	var a=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness,
	h=a*e.length;
	this.style.dropShadow&&(h+=this.style.dropShadowDistance),
	this.canvas.height=8000;
	//h,
	navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),
	this.context.font=this.style.font,
	this.context.strokeStyle=this.style.stroke,
	this.context.lineWidth=this.style.strokeThickness,
	this.context.textBaseline="top";
	var l,u;
if(this.style.dropShadow){
	this.context.fillStyle=this.style.dropShadowColor;
	var c=Math.sin(this.style.dropShadowAngle)*this.style.dropShadowDistance,
	d=Math.cos(this.style.dropShadowAngle)*this.style.dropShadowDistance;
	for(n=0;n<e.length;n++)
		l=this.style.strokeThickness/2,
	u=this.style.strokeThickness/2+n*a,
	"right"===this.style.align?l+=i-r[n]:"center"===this.style.align&&(l+=(i-r[n])/2),
	this.style.fill&&this.context.fillText(e[n],l+c,u+d)
}
for(this.context.fillStyle=this.style.fill,n=0;n<e.length;n++)
	l=this.style.strokeThickness/2,
u=this.style.strokeThickness/2+n*a,
"right"===this.style.align?l+=i-r[n]:"center"===this.style.align&&(l+=(i-r[n])/2),
this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(e[n],l,u),
this.style.fill&&this.context.fillText(e[n],l,u);
this.updateTexture()
},
i.Text.prototype.updateTexture=function(){
	this.texture.baseTexture.width=this.canvas.width=8000,
	this.texture.baseTexture.height=this.canvas.height=8000,
	this.texture.crop.width=this.texture.frame.width=this.canvas.width=8000,
	this.texture.crop.height=this.texture.frame.height=this.canvas.height=8000,
	this._width=this.canvas.width=8000,
	this._height=this.canvas.height=8000,
	this.requiresUpdate=!0
},
i.Text.prototype._renderWebGL=function(t){
	this.requiresUpdate&&(this.requiresUpdate=!1,i.updateWebGLTexture(this.texture.baseTexture,t.gl)),
	i.Sprite.prototype._renderWebGL.call(this,t)
},
i.Text.prototype.updateTransform=function(){
	this.dirty&&(this.updateText(),this.dirty=!1),i.Sprite.prototype.updateTransform.call(this)
},
i.Text.prototype.determineFontHeight=function(t){
	var e=i.Text.heightCache[t];
	if(!e){
		var r=document.getElementsByTagName("body")[0],
		n=document.createElement("div"),
		o=document.createTextNode("M");
		n.appendChild(o),
		n.setAttribute("style",t+";position:absolute;top:0;left:0"),
		r.appendChild(n),
		e=n.offsetHeight,
		i.Text.heightCache[t]=e,
		r.removeChild(n)
	}
	return e
},
i.Text.prototype.wordWrap=function(t){
	for(var e="",r=t.split("\n"),i=0;i<r.length;i++){
		for(var n=this.style.wordWrapWidth,o=r[i].split(" "),s=0;s<o.length;s++){
			var a=this.context.measureText(o[s]).width,
			h=a+this.context.measureText(" ").width;
			0===s||h>n?(s>0&&(e+="\n"),
				e+=o[s],
				n=this.style.wordWrapWidth-a):(n-=h,e+=" "+o[s])
		}
		i<r.length-1&&(e+="\n")
	}
	return e
},
i.Text.prototype.destroy=function(t){
	this.context=null,
	this.canvas=null,
	this.texture.destroy(void 0===t?!0:t)
},
i.Text.heightCache={},
i.BitmapText=function(t,e){
	i.DisplayObjectContainer.call(this),
	this._pool=[],
	this.setText(t),
	this.setStyle(e),
	this.updateText(),
	this.dirty=!1
},
i.BitmapText.prototype=Object.create(i.DisplayObjectContainer.prototype),
i.BitmapText.prototype.constructor=i.BitmapText,
i.BitmapText.prototype.setText=function(t){
	this.text=t||" ",this.dirty=!0
},
i.BitmapText.prototype.setStyle=function(t){
	t=t||{},
	t.align=t.align||"left",
	this.style=t;
	var e=t.font.split(" ");
	this.fontName=e[e.length-1],
	this.fontSize=e.length>=2?parseInt(e[e.length-2],10):i.BitmapText.fonts[this.fontName].size,
	this.dirty=!0,
	this.tint=t.tint
},
i.BitmapText.prototype.updateText=function(){
	for(var t=i.BitmapText.fonts[this.fontName],e=new i.Point,r=null,n=[],o=0,s=[],a=0,h=this.fontSize/t.size,l=0;l<this.text.length;l++){
		var u=this.text.charCodeAt(l);
		if(/(?:\r\n|\r|\n)/.test(this.text.charAt(l)))
			s.push(e.x),
			o=Math.max(o,e.x),
			a++,
			e.x=0,
			e.y+=t.lineHeight,
			r=null;
			else{
				var c=t.chars[u];
				c&&(r&&c[r]&&(e.x+=c.kerning[r]),
					n.push({
						texture:c.texture,
						line:a,
						charCode:u,
						position:new i.Point(e.x+c.xOffset,e.y+c.yOffset)
					}),
					e.x+=c.xAdvance,r=u)
			}
		}
		s.push(e.x),
		o=Math.max(o,e.x);
		var d=[];
		for(l=0;a>=l;l++){
			var f=0;"right"===this.style.align?f=o-s[l]:"center"===this.style.align&&(f=(o-s[l])/2),
			d.push(f)
		}
		var p=this.children.length,
		g=n.length,
		v=this.tint||16777215;
		for(l=0;g>l;l++){
			var m=p>l?this.children[l]:this._pool.pop();
			m?m.setTexture(n[l].texture):m=new i.Sprite(n[l].texture),
			m.position.x=(n[l].position.x+d[n[l].line])*h,
			m.position.y=n[l].position.y*h,
			m.scale.x=m.scale.y=h,
			m.tint=v,
			m.parent||this.addChild(m)
		}
		for(;this.children.length>g;){
			var x=this.getChildAt(this.children.length-1);
			this._pool.push(x),
			this.removeChild(x)
		}
		this.textWidth=o*h,
		this.textHeight=(e.y+t.lineHeight)*h
	},
	i.BitmapText.prototype.updateTransform=function(){
		this.dirty&&(this.updateText(),this.dirty=!1),
		i.DisplayObjectContainer.prototype.updateTransform.call(this)
	},
	i.BitmapText.fonts={},
	i.InteractionData=function(){
		this.global=new i.Point,
		this.target=null,
		this.originalEvent=null
	},
	i.InteractionData.prototype.getLocalPosition=function(t){
		var e=t.worldTransform,
		r=this.global,
		n=e.a,
		o=e.b,
		s=e.tx,
		a=e.c,
		h=e.d,
		l=e.ty,
		u=1/(n*h+o*-a);
		return new i.Point(h*u*r.x+-o*u*r.y+(l*o-s*h)*u,n*u*r.y+-a*u*r.x+(-l*n+s*a)*u)
	},
	i.InteractionData.prototype.constructor=i.InteractionData,
	i.InteractionManager=function(t){
		this.stage=t,this.mouse=new i.InteractionData,this.touchs={},this.tempPoint=new i.Point,this.mouseoverEnabled=!0,this.pool=[],this.interactiveItems=[],this.interactionDOMElement=null,this.onMouseMove=this.onMouseMove.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.last=0,this.currentCursorStyle="inherit",this.mouseOut=!1},i.InteractionManager.prototype.constructor=i.InteractionManager,i.InteractionManager.prototype.collectInteractiveSprite=function(t,e){for(var r=t.children,i=r.length,n=i-1;n>=0;n--){var o=r[n];o._interactive?(e.interactiveChildren=!0,this.interactiveItems.push(o),o.children.length>0&&this.collectInteractiveSprite(o,o)):(o.__iParent=null,o.children.length>0&&this.collectInteractiveSprite(o,e))}},i.InteractionManager.prototype.setTarget=function(t){this.target=t,null===this.interactionDOMElement&&this.setTargetDomElement(t.view)},i.InteractionManager.prototype.setTargetDomElement=function(t){this.removeEvents(),window.navigator.msPointerEnabled&&(t.style["-ms-content-zooming"]="none",t.style["-ms-touch-action"]="none"),this.interactionDOMElement=t,t.addEventListener("mousemove",this.onMouseMove,!0),t.addEventListener("mousedown",this.onMouseDown,!0),t.addEventListener("mouseout",this.onMouseOut,!0),t.addEventListener("touchstart",this.onTouchStart,!0),t.addEventListener("touchend",this.onTouchEnd,!0),t.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("mouseup",this.onMouseUp,!0)},i.InteractionManager.prototype.removeEvents=function(){this.interactionDOMElement&&(this.interactionDOMElement.style["-ms-content-zooming"]="",this.interactionDOMElement.style["-ms-touch-action"]="",this.interactionDOMElement.removeEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,!0),this.interactionDOMElement=null,window.removeEventListener("mouseup",this.onMouseUp,!0))},i.InteractionManager.prototype.update=function(){if(this.target){var t=Date.now(),e=t-this.last;if(e=e*i.INTERACTION_FREQUENCY/1e3,!(1>e)){this.last=t;var r=0;this.dirty&&this.rebuildInteractiveGraph();var n=this.interactiveItems.length,o="inherit",s=!1;for(r=0;n>r;r++){var a=this.interactiveItems[r];a.__hit=this.hitTest(a,this.mouse),this.mouse.target=a,a.__hit&&!s?(a.buttonMode&&(o=a.defaultCursor),a.interactiveChildren||(s=!0),a.__isOver||(a.mouseover&&a.mouseover(this.mouse),a.__isOver=!0)):a.__isOver&&(a.mouseout&&a.mouseout(this.mouse),a.__isOver=!1)}this.currentCursorStyle!==o&&(this.currentCursorStyle=o,this.interactionDOMElement.style.cursor=o)}}},i.InteractionManager.prototype.rebuildInteractiveGraph=function(){this.dirty=!1;for(var t=this.interactiveItems.length,e=0;t>e;e++)this.interactiveItems[e].interactiveChildren=!1;this.interactiveItems=[],this.stage.interactive&&this.interactiveItems.push(this.stage),this.collectInteractiveSprite(this.stage,this.stage)},i.InteractionManager.prototype.onMouseMove=function(t){this.dirty&&this.rebuildInteractiveGraph(),this.mouse.originalEvent=t||window.event;var e=this.interactionDOMElement.getBoundingClientRect();this.mouse.global.x=(t.clientX-e.left)*(this.target.width/e.width),this.mouse.global.y=(t.clientY-e.top)*(this.target.height/e.height);for(var r=this.interactiveItems.length,i=0;r>i;i++){var n=this.interactiveItems[i];n.mousemove&&n.mousemove(this.mouse)}},i.InteractionManager.prototype.onMouseDown=function(t){this.dirty&&this.rebuildInteractiveGraph(),this.mouse.originalEvent=t||window.event,i.AUTO_PREVENT_DEFAULT&&this.mouse.originalEvent.preventDefault();for(var e=this.interactiveItems.length,r=0;e>r;r++){var n=this.interactiveItems[r];if((n.mousedown||n.click)&&(n.__mouseIsDown=!0,n.__hit=this.hitTest(n,this.mouse),n.__hit&&(n.mousedown&&n.mousedown(this.mouse),n.__isDown=!0,!n.interactiveChildren)))break}},i.InteractionManager.prototype.onMouseOut=function(){this.dirty&&this.rebuildInteractiveGraph();var t=this.interactiveItems.length;this.interactionDOMElement.style.cursor="inherit";for(var e=0;t>e;e++){var r=this.interactiveItems[e];r.__isOver&&(this.mouse.target=r,r.mouseout&&r.mouseout(this.mouse),r.__isOver=!1)}this.mouseOut=!0,this.mouse.global.x=-1e4,this.mouse.global.y=-1e4},i.InteractionManager.prototype.onMouseUp=function(t){this.dirty&&this.rebuildInteractiveGraph(),this.mouse.originalEvent=t||window.event;for(var e=this.interactiveItems.length,r=!1,i=0;e>i;i++){var n=this.interactiveItems[i];n.__hit=this.hitTest(n,this.mouse),n.__hit&&!r?(n.mouseup&&n.mouseup(this.mouse),n.__isDown&&n.click&&n.click(this.mouse),n.interactiveChildren||(r=!0)):n.__isDown&&n.mouseupoutside&&n.mouseupoutside(this.mouse),n.__isDown=!1}},i.InteractionManager.prototype.hitTest=function(t,e){var r=e.global;if(!t.worldVisible)return!1;var n=t instanceof i.Sprite,o=t.worldTransform,s=o.a,a=o.b,h=o.tx,l=o.c,u=o.d,c=o.ty,d=1/(s*u+a*-l),f=u*d*r.x+-a*d*r.y+(c*a-h*u)*d,p=s*d*r.y+-l*d*r.x+(-c*s+h*l)*d;if(e.target=t,t.hitArea&&t.hitArea.contains)return t.hitArea.contains(f,p)?(e.target=t,!0):!1;if(n){var g,v=t.texture.frame.width,m=t.texture.frame.height,x=-v*t.anchor.x;if(f>x&&x+v>f&&(g=-m*t.anchor.y,p>g&&g+m>p))return e.target=t,!0}for(var y=t.children.length,b=0;y>b;b++){var T=t.children[b],S=this.hitTest(T,e);if(S)return e.target=t,!0}return!1},i.InteractionManager.prototype.onTouchMove=function(t){this.dirty&&this.rebuildInteractiveGraph();var e,r=this.interactionDOMElement.getBoundingClientRect(),i=t.changedTouches,n=0;for(n=0;n<i.length;n++){var o=i[n];e=this.touchs[o.identifier],e.originalEvent=t||window.event,e.global.x=(o.clientX-r.left)*(this.target.width/5000),
			e.global.y=(o.clientY-r.top)*(this.target.height/r.height),navigator.isCocoonJS&&(e.global.x=o.clientX,e.global.y=o.clientY);for(var s=0;s<this.interactiveItems.length;s++){var a=this.interactiveItems[s];a.touchmove&&a.__touchData&&a.__touchData[o.identifier]&&a.touchmove(e)}}},i.InteractionManager.prototype.onTouchStart=function(t){this.dirty&&this.rebuildInteractiveGraph();
var e=this.interactionDOMElement.getBoundingClientRect();i.AUTO_PREVENT_DEFAULT&&t.preventDefault();for(var r=t.changedTouches,n=0;n<r.length;n++){var o=r[n],s=this.pool.pop();s||(s=new i.InteractionData),s.originalEvent=t||window.event,this.touchs[o.identifier]=s,s.global.x=(o.clientX-e.left)*(this.target.width/e.width),s.global.y=(o.clientY-e.top)*(this.target.height/e.height),navigator.isCocoonJS&&(s.global.x=o.clientX,s.global.y=o.clientY);for(var a=this.interactiveItems.length,h=0;a>h;h++){var l=this.interactiveItems[h];if((l.touchstart||l.tap)&&(l.__hit=this.hitTest(l,s),l.__hit&&(l.touchstart&&l.touchstart(s),l.__isDown=!0,l.__touchData=l.__touchData||{},l.__touchData[o.identifier]=s,!l.interactiveChildren)))break}}},i.InteractionManager.prototype.onTouchEnd=function(t){this.dirty&&this.rebuildInteractiveGraph();for(var e=this.interactionDOMElement.getBoundingClientRect(),r=t.changedTouches,i=0;i<r.length;i++){var n=r[i],o=this.touchs[n.identifier],s=!1;o.global.x=(n.clientX-e.left)*(this.target.width/e.width),o.global.y=(n.clientY-e.top)*(this.target.height/e.height),navigator.isCocoonJS&&(o.global.x=n.clientX,o.global.y=n.clientY);for(var a=this.interactiveItems.length,h=0;a>h;h++){var l=this.interactiveItems[h];l.__touchData&&l.__touchData[n.identifier]&&(l.__hit=this.hitTest(l,l.__touchData[n.identifier]),o.originalEvent=t||window.event,(l.touchend||l.tap)&&(l.__hit&&!s?(l.touchend&&l.touchend(o),l.__isDown&&l.tap&&l.tap(o),l.interactiveChildren||(s=!0)):l.__isDown&&l.touchendoutside&&l.touchendoutside(o),l.__isDown=!1),l.__touchData[n.identifier]=null)}this.pool.push(o),this.touchs[n.identifier]=null}},i.Stage=function(t){i.DisplayObjectContainer.call(this),this.worldTransform=new i.Matrix,this.interactive=!0,this.interactionManager=new i.InteractionManager(this),this.dirty=!0,this.stage=this,this.stage.hitArea=new i.Rectangle(0,0,1e5,1e5),this.setBackgroundColor(t)},i.Stage.prototype=Object.create(i.DisplayObjectContainer.prototype),i.Stage.prototype.constructor=i.Stage,i.Stage.prototype.setInteractionDelegate=function(t){this.interactionManager.setTargetDomElement(t)},i.Stage.prototype.updateTransform=function(){this.worldAlpha=1;for(var t=0,e=this.children.length;e>t;t++)this.children[t].updateTransform();this.dirty&&(this.dirty=!1,this.interactionManager.dirty=!0),this.interactive&&this.interactionManager.update()},i.Stage.prototype.setBackgroundColor=function(t){this.backgroundColor=t||0,this.backgroundColorSplit=i.hex2rgb(this.backgroundColor);var e=this.backgroundColor.toString(16);e="000000".substr(0,6-e.length)+e,this.backgroundColorString="#"+e},i.Stage.prototype.getMousePosition=function(){return this.interactionManager.mouse.global};for(var n=0,o=["ms","moz","webkit","o"],s=0;s<o.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[o[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[o[s]+"CancelAnimationFrame"]||window[o[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var e=(new Date).getTime(),r=Math.max(0,16-(e-n)),i=window.setTimeout(function(){t(e+r)},r);return n=e+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),window.requestAnimFrame=window.requestAnimationFrame,i.hex2rgb=function(t){return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]},i.rgb2hex=function(t){return(255*t[0]<<16)+(255*t[1]<<8)+255*t[2]},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(){var t=Array.prototype.slice;return function(e){function r(){var o=n.concat(t.call(arguments));i.apply(this instanceof r?this:e,o)}var i=this,n=t.call(arguments,1);if("function"!=typeof i)throw new TypeError;return r.prototype=function o(t){return t&&(o.prototype=t),this instanceof o?void 0:new o}(i.prototype),r}}()),i.AjaxRequest=function(){var t=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];if(!window.ActiveXObject)return window.XMLHttpRequest?new window.XMLHttpRequest:!1;for(var e=0;e<t.length;e++)try{return new window.ActiveXObject(t[e])}catch(r){}},i.canUseNewCanvasBlendModes=function(){var t=document.createElement("canvas");t.width=1,t.height=1;var e=t.getContext("2d");return e.fillStyle="#000",e.fillRect(0,0,1,1),e.globalCompositeOperation="multiply",e.fillStyle="#fff",e.fillRect(0,0,1,1),0===e.getImageData(0,0,1,1).data[0]},i.getNextPowerOfTwo=function(t){if(t>0&&0===(t&t-1))return t;for(var e=1;t>e;)e<<=1;return e},i.EventTarget=function(){var t={};this.addEventListener=this.on=function(e,r){void 0===t[e]&&(t[e]=[]),-1===t[e].indexOf(r)&&t[e].unshift(r)},this.dispatchEvent=this.emit=function(e){if(t[e.type]&&t[e.type].length)for(var r=t[e.type].length-1;r>=0;r--)t[e.type][r](e)},this.removeEventListener=this.off=function(e,r){if(void 0!==t[e]){var i=t[e].indexOf(r);-1!==i&&t[e].splice(i,1)}},this.removeAllEventListeners=function(e){var r=t[e];r&&(r.length=0)}},i.autoDetectRenderer=function(t,e,r,n,o){t||(t=800),e||(e=600);var s=function(){try{var t=document.createElement("canvas");return!!window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch(e){return!1}}();return s?new i.WebGLRenderer(t,e,r,n,o):new i.CanvasRenderer(t,e,r,n)},i.autoDetectRecommendedRenderer=function(t,e,r,n,o){t||(t=800),e||(e=600);var s=function(){try{var t=document.createElement("canvas");return!!window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch(e){return!1}}(),a=/Android/i.test(navigator.userAgent);return s&&!a?new i.WebGLRenderer(t,e,r,n,o):new i.CanvasRenderer(t,e,r,n)},i.PolyK={},i.PolyK.Triangulate=function(t){var e=!0,r=t.length>>1;if(3>r)return[];for(var n=[],o=[],s=0;r>s;s++)o.push(s);s=0;for(var a=r;a>3;){var h=o[(s+0)%a],l=o[(s+1)%a],u=o[(s+2)%a],c=t[2*h],d=t[2*h+1],f=t[2*l],p=t[2*l+1],g=t[2*u],v=t[2*u+1],m=!1;if(i.PolyK._convex(c,d,f,p,g,v,e)){m=!0;for(var x=0;a>x;x++){var y=o[x];if(y!==h&&y!==l&&y!==u&&i.PolyK._PointInTriangle(t[2*y],t[2*y+1],c,d,f,p,g,v)){m=!1;break}}}if(m)n.push(h,l,u),o.splice((s+1)%a,1),a--,s=0;else if(s++>3*a){if(!e)return window.console.log("PIXI Warning: shape too complex to fill"),[];for(n=[],o=[],s=0;r>s;s++)o.push(s);s=0,a=r,e=!1}}return n.push(o[0],o[1],o[2]),n},i.PolyK._PointInTriangle=function(t,e,r,i,n,o,s,a){var h=s-r,l=a-i,u=n-r,c=o-i,d=t-r,f=e-i,p=h*h+l*l,g=h*u+l*c,v=h*d+l*f,m=u*u+c*c,x=u*d+c*f,y=1/(p*m-g*g),b=(m*v-g*x)*y,T=(p*x-g*v)*y;return b>=0&&T>=0&&1>b+T},i.PolyK._convex=function(t,e,r,i,n,o,s){return(e-i)*(n-r)+(r-t)*(o-i)>=0===s},i.initDefaultShaders=function(){},i.CompileVertexShader=function(t,e){return i._CompileShader(t,e,t.VERTEX_SHADER)},i.CompileFragmentShader=function(t,e){return i._CompileShader(t,e,t.FRAGMENT_SHADER)},i._CompileShader=function(t,e,r){var i=e.join("\n"),n=t.createShader(r);return t.shaderSource(n,i),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(window.console.log(t.getShaderInfoLog(n)),null)},i.compileProgram=function(t,e,r){var n=i.CompileFragmentShader(t,r),o=i.CompileVertexShader(t,e),s=t.createProgram();return t.attachShader(s,o),t.attachShader(s,n),t.linkProgram(s),t.getProgramParameter(s,t.LINK_STATUS)||window.console.log("Could not initialise shaders"),s},i.PixiShader=function(t){this._UID=i._UID++,this.gl=t,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.textureCount=0,this.attributes=[],this.init()},i.PixiShader.prototype.init=function(){var t=this.gl,e=i.compileProgram(t,this.vertexSrc||i.PixiShader.defaultVertexSrc,this.fragmentSrc);t.useProgram(e),this.uSampler=t.getUniformLocation(e,"uSampler"),this.projectionVector=t.getUniformLocation(e,"projectionVector"),this.offsetVector=t.getUniformLocation(e,"offsetVector"),this.dimensions=t.getUniformLocation(e,"dimensions"),this.aVertexPosition=t.getAttribLocation(e,"aVertexPosition"),this.aTextureCoord=t.getAttribLocation(e,"aTextureCoord"),this.colorAttribute=t.getAttribLocation(e,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aTextureCoord,this.colorAttribute];for(var r in this.uniforms)this.uniforms[r].uniformLocation=t.getUniformLocation(e,r);this.initUniforms(),this.program=e},i.PixiShader.prototype.initUniforms=function(){this.textureCount=1;var t,e=this.gl;for(var r in this.uniforms){t=this.uniforms[r];var i=t.type;"sampler2D"===i?(t._init=!1,null!==t.value&&this.initSampler2D(t)):"mat2"===i||"mat3"===i||"mat4"===i?(t.glMatrix=!0,t.glValueLength=1,"mat2"===i?t.glFunc=e.uniformMatrix2fv:"mat3"===i?t.glFunc=e.uniformMatrix3fv:"mat4"===i&&(t.glFunc=e.uniformMatrix4fv)):(t.glFunc=e["uniform"+i],t.glValueLength="2f"===i||"2i"===i?2:"3f"===i||"3i"===i?3:"4f"===i||"4i"===i?4:1)}},i.PixiShader.prototype.initSampler2D=function(t){if(t.value&&t.value.baseTexture&&t.value.baseTexture.hasLoaded){var e=this.gl;if(e.activeTexture(e["TEXTURE"+this.textureCount]),e.bindTexture(e.TEXTURE_2D,t.value.baseTexture._glTextures[e.id]),t.textureData){var r=t.textureData,i=r.magFilter?r.magFilter:e.LINEAR,n=r.minFilter?r.minFilter:e.LINEAR,o=r.wrapS?r.wrapS:e.CLAMP_TO_EDGE,s=r.wrapT?r.wrapT:e.CLAMP_TO_EDGE,a=r.luminance?e.LUMINANCE:e.RGBA;if(r.repeat&&(o=e.REPEAT,s=e.REPEAT),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!!r.flipY),5000){var h=5000?5000:512,l=r.height?r.height:2,u=r.border?r.border:0;e.texImage2D(e.TEXTURE_2D,0,a,h,l,u,a,e.UNSIGNED_BYTE,null)}else e.texImage2D(e.TEXTURE_2D,0,a,e.RGBA,e.UNSIGNED_BYTE,t.value.baseTexture.source);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,s)}e.uniform1i(t.uniformLocation,this.textureCount),t._init=!0,this.textureCount++}},i.PixiShader.prototype.syncUniforms=function(){this.textureCount=1;var t,e=this.gl;for(var r in this.uniforms)t=this.uniforms[r],1===t.glValueLength?t.glMatrix===!0?t.glFunc.call(e,t.uniformLocation,t.transpose,t.value):t.glFunc.call(e,t.uniformLocation,t.value):2===t.glValueLength?t.glFunc.call(e,t.uniformLocation,t.value.x,t.value.y):3===t.glValueLength?t.glFunc.call(e,t.uniformLocation,t.value.x,t.value.y,t.value.z):4===t.glValueLength?t.glFunc.call(e,t.uniformLocation,t.value.x,t.value.y,t.value.z,t.value.w):"sampler2D"===t.type&&(t._init?(e.activeTexture(e["TEXTURE"+this.textureCount]),e.bindTexture(e.TEXTURE_2D,t.value.baseTexture._glTextures[e.id]||i.createWebGLTexture(t.value.baseTexture,e)),e.uniform1i(t.uniformLocation,this.textureCount),this.textureCount++):this.initSampler2D(t))},i.PixiShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},i.PixiShader.defaultVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec2 aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","varying vec4 vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;","   vColor = vec4(color * aColor.x, aColor.x);","}"],i.PixiFastShader=function(t){this._UID=i._UID++,this.gl=t,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform mat3 uMatrix;","varying vec2 vTextureCoord;","varying float vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   vec2 v;","   vec2 sv = aVertexPosition * aScale;","   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);","   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);","   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;","   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"],this.textureCount=0,this.init()},i.PixiFastShader.prototype.init=function(){var t=this.gl,e=i.compileProgram(t,this.vertexSrc,this.fragmentSrc);t.useProgram(e),this.uSampler=t.getUniformLocation(e,"uSampler"),this.projectionVector=t.getUniformLocation(e,"projectionVector"),this.offsetVector=t.getUniformLocation(e,"offsetVector"),this.dimensions=t.getUniformLocation(e,"dimensions"),this.uMatrix=t.getUniformLocation(e,"uMatrix"),this.aVertexPosition=t.getAttribLocation(e,"aVertexPosition"),this.aPositionCoord=t.getAttribLocation(e,"aPositionCoord"),this.aScale=t.getAttribLocation(e,"aScale"),this.aRotation=t.getAttribLocation(e,"aRotation"),this.aTextureCoord=t.getAttribLocation(e,"aTextureCoord"),this.colorAttribute=t.getAttribLocation(e,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aPositionCoord,this.aScale,this.aRotation,this.aTextureCoord,this.colorAttribute],this.program=e},i.PixiFastShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},i.StripShader=function(t){this._UID=i._UID++,this.gl=t,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","uniform float alpha;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","}"],this.init()},i.StripShader.prototype.init=function(){var t=this.gl,e=i.compileProgram(t,this.vertexSrc,this.fragmentSrc);t.useProgram(e),this.uSampler=t.getUniformLocation(e,"uSampler"),this.projectionVector=t.getUniformLocation(e,"projectionVector"),this.offsetVector=t.getUniformLocation(e,"offsetVector"),this.colorAttribute=t.getAttribLocation(e,"aColor"),this.aVertexPosition=t.getAttribLocation(e,"aVertexPosition"),this.aTextureCoord=t.getAttribLocation(e,"aTextureCoord"),this.attributes=[this.aVertexPosition,this.aTextureCoord],this.translationMatrix=t.getUniformLocation(e,"translationMatrix"),this.alpha=t.getUniformLocation(e,"alpha"),this.program=e},i.PrimitiveShader=function(t){this._UID=i._UID++,this.gl=t,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform float alpha;","uniform vec3 tint;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"],this.init()},i.PrimitiveShader.prototype.init=function(){var t=this.gl,e=i.compileProgram(t,this.vertexSrc,this.fragmentSrc);t.useProgram(e),this.projectionVector=t.getUniformLocation(e,"projectionVector"),this.offsetVector=t.getUniformLocation(e,"offsetVector"),this.tintColor=t.getUniformLocation(e,"tint"),this.aVertexPosition=t.getAttribLocation(e,"aVertexPosition"),this.colorAttribute=t.getAttribLocation(e,"aColor"),this.attributes=[this.aVertexPosition,this.colorAttribute],this.translationMatrix=t.getUniformLocation(e,"translationMatrix"),this.alpha=t.getUniformLocation(e,"alpha"),this.program=e},i.PrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attribute=null},i.ComplexPrimitiveShader=function(t){this._UID=i._UID++,this.gl=t,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform vec3 tint;","uniform float alpha;","uniform vec3 color;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = vec4(color * alpha * tint, alpha);","}"],this.init()},i.ComplexPrimitiveShader.prototype.init=function(){var t=this.gl,e=i.compileProgram(t,this.vertexSrc,this.fragmentSrc);t.useProgram(e),this.projectionVector=t.getUniformLocation(e,"projectionVector"),this.offsetVector=t.getUniformLocation(e,"offsetVector"),this.tintColor=t.getUniformLocation(e,"tint"),this.color=t.getUniformLocation(e,"color"),this.aVertexPosition=t.getAttribLocation(e,"aVertexPosition"),this.attributes=[this.aVertexPosition,this.colorAttribute],this.translationMatrix=t.getUniformLocation(e,"translationMatrix"),this.alpha=t.getUniformLocation(e,"alpha"),this.program=e},i.ComplexPrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attribute=null},i.WebGLGraphics=function(){},i.WebGLGraphics.renderGraphics=function(t,e){var r,n=e.gl,o=e.projection,s=e.offset,a=e.shaderManager.primitiveShader;t.dirty&&i.WebGLGraphics.updateGraphics(t,n);for(var h=t._webGL[n.id],l=0;l<h.data.length;l++)1===h.data[l].mode?(r=h.data[l],e.stencilManager.pushStencil(t,r,e),n.drawElements(n.TRIANGLE_FAN,4,n.UNSIGNED_SHORT,2*(r.indices.length-4)),e.stencilManager.popStencil(t,r,e),this.last=r.mode):(r=h.data[l],e.shaderManager.setShader(a),a=e.shaderManager.primitiveShader,n.uniformMatrix3fv(a.translationMatrix,!1,t.worldTransform.toArray(!0)),n.uniform2f(a.projectionVector,o.x,-o.y),n.uniform2f(a.offsetVector,-s.x,-s.y),n.uniform3fv(a.tintColor,i.hex2rgb(t.tint)),n.uniform1f(a.alpha,t.worldAlpha),n.bindBuffer(n.ARRAY_BUFFER,r.buffer),n.vertexAttribPointer(a.aVertexPosition,2,n.FLOAT,!1,24,0),n.vertexAttribPointer(a.colorAttribute,4,n.FLOAT,!1,24,8),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r.indexBuffer),n.drawElements(n.TRIANGLE_STRIP,r.indices.length,n.UNSIGNED_SHORT,0))},i.WebGLGraphics.updateGraphics=function(t,e){var r=t._webGL[e.id];r||(r=t._webGL[e.id]={lastIndex:0,data:[],gl:e}),t.dirty=!1;var n;if(t.clearDirty){for(t.clearDirty=!1,n=0;n<r.data.length;n++){var o=r.data[n];o.reset(),i.WebGLGraphics.graphicsDataPool.push(o)}r.data=[],r.lastIndex=0}var s;for(n=r.lastIndex;n<t.graphicsData.length;n++){var a=t.graphicsData[n];a.type===i.Graphics.POLY?(a.fill&&a.points.length>6&&(a.points.length>10?(s=i.WebGLGraphics.switchMode(r,1),i.WebGLGraphics.buildComplexPoly(a,s)):(s=i.WebGLGraphics.switchMode(r,0),i.WebGLGraphics.buildPoly(a,s))),a.lineWidth>0&&(s=i.WebGLGraphics.switchMode(r,0),i.WebGLGraphics.buildLine(a,s))):(s=i.WebGLGraphics.switchMode(r,0),a.type===i.Graphics.RECT?i.WebGLGraphics.buildRectangle(a,s):a.type===i.Graphics.CIRC||a.type===i.Graphics.ELIP?i.WebGLGraphics.buildCircle(a,s):a.type===i.Graphics.RREC&&i.WebGLGraphics.buildRoundedRectangle(a,s)),r.lastIndex++}for(n=0;n<r.data.length;n++)s=r.data[n],s.dirty&&s.upload()},i.WebGLGraphics.switchMode=function(t,e){var r;return t.data.length?(r=t.data[t.data.length-1],(r.mode!==e||1===e)&&(r=i.WebGLGraphics.graphicsDataPool.pop()||new i.WebGLGraphicsData(t.gl),r.mode=e,t.data.push(r))):(r=i.WebGLGraphics.graphicsDataPool.pop()||new i.WebGLGraphicsData(t.gl),r.mode=e,t.data.push(r)),r.dirty=!0,r},i.WebGLGraphics.buildRectangle=function(t,e){var r=t.points,n=r[0],o=r[1],s=r[2],a=r[3];if(t.fill){var h=i.hex2rgb(t.fillColor),l=t.fillAlpha,u=h[0]*l,c=h[1]*l,d=h[2]*l,f=e.points,p=e.indices,g=f.length/6;f.push(n,o),f.push(u,c,d,l),f.push(n+s,o),f.push(u,c,d,l),f.push(n,o+a),f.push(u,c,d,l),f.push(n+s,o+a),f.push(u,c,d,l),p.push(g,g,g+1,g+2,g+3,g+3)}if(t.lineWidth){var v=t.points;t.points=[n,o,n+s,o,n+s,o+a,n,o+a,n,o],i.WebGLGraphics.buildLine(t,e),t.points=v}},i.WebGLGraphics.buildRoundedRectangle=function(t,e){var r=t.points,n=r[0],o=r[1],s=r[2],a=r[3],h=r[4],l=[];if(l.push(n,o+h),l=l.concat(i.WebGLGraphics.quadraticBezierCurve(n,o+a-h,n,o+a,n+h,o+a)),l=l.concat(i.WebGLGraphics.quadraticBezierCurve(n+s-h,o+a,n+s,o+a,n+s,o+a-h)),l=l.concat(i.WebGLGraphics.quadraticBezierCurve(n+s,o+h,n+s,o,n+s-h,o)),l=l.concat(i.WebGLGraphics.quadraticBezierCurve(n+h,o,n,o,n,o+h)),t.fill){var u=i.hex2rgb(t.fillColor),c=t.fillAlpha,d=u[0]*c,f=u[1]*c,p=u[2]*c,g=e.points,v=e.indices,m=g.length/6,x=i.PolyK.Triangulate(l),y=0;for(y=0;y<x.length;y+=3)v.push(x[y]+m),v.push(x[y]+m),v.push(x[y+1]+m),v.push(x[y+2]+m),v.push(x[y+2]+m);for(y=0;y<l.length;y++)g.push(l[y],l[++y],d,f,p,c)}if(t.lineWidth){var b=t.points;t.points=l,i.WebGLGraphics.buildLine(t,e),t.points=b}},i.WebGLGraphics.quadraticBezierCurve=function(t,e,r,i,n,o){function s(t,e,r){var i=e-t;return t+i*r}for(var a,h,l,u,c,d,f=20,p=[],g=0,v=0;f>=v;v++)g=v/f,a=s(t,r,g),h=s(e,i,g),l=s(r,n,g),u=s(i,o,g),c=s(a,l,g),d=s(h,u,g),p.push(c,d);return p},i.WebGLGraphics.buildCircle=function(t,e){var r=t.points,n=r[0],o=r[1],s=r[2],a=r[3],h=40,l=2*Math.PI/h,u=0;if(t.fill){var c=i.hex2rgb(t.fillColor),d=t.fillAlpha,f=c[0]*d,p=c[1]*d,g=c[2]*d,v=e.points,m=e.indices,x=v.length/6;for(m.push(x),u=0;h+1>u;u++)v.push(n,o,f,p,g,d),v.push(n+Math.sin(l*u)*s,o+Math.cos(l*u)*a,f,p,g,d),m.push(x++,x++);m.push(x-1)}if(t.lineWidth){var y=t.points;for(t.points=[],u=0;h+1>u;u++)t.points.push(n+Math.sin(l*u)*s,o+Math.cos(l*u)*a);i.WebGLGraphics.buildLine(t,e),t.points=y}},i.WebGLGraphics.buildLine=function(t,e){var r=0,n=t.points;if(0!==n.length){if(t.lineWidth%2)for(r=0;r<n.length;r++)n[r]+=.5;var o=new i.Point(n[0],n[1]),s=new i.Point(n[n.length-2],n[n.length-1]);if(o.x===s.x&&o.y===s.y){n=n.slice(),n.pop(),n.pop(),s=new i.Point(n[n.length-2],n[n.length-1]);var a=s.x+.5*(o.x-s.x),h=s.y+.5*(o.y-s.y);n.unshift(a,h),n.push(a,h)}var l,u,c,d,f,p,g,v,m,x,y,b,T,S,w,E,_,C,A,R,M,L,F,I=e.points,B=e.indices,P=n.length/2,O=n.length,D=I.length/6,k=t.lineWidth/2,G=i.hex2rgb(t.lineColor),N=t.lineAlpha,U=G[0]*N,j=G[1]*N,W=G[2]*N;for(c=n[0],d=n[1],f=n[2],p=n[3],m=-(d-p),x=c-f,F=Math.sqrt(m*m+x*x),m/=F,x/=F,m*=k,x*=k,I.push(c-m,d-x,U,j,W,N),I.push(c+m,d+x,U,j,W,N),r=1;P-1>r;r++)c=n[2*(r-1)],d=n[2*(r-1)+1],f=n[2*r],p=n[2*r+1],g=n[2*(r+1)],v=n[2*(r+1)+1],m=-(d-p),x=c-f,F=Math.sqrt(m*m+x*x),m/=F,x/=F,m*=k,x*=k,y=-(p-v),b=f-g,F=Math.sqrt(y*y+b*b),y/=F,b/=F,y*=k,b*=k,w=-x+d-(-x+p),E=-m+f-(-m+c),_=(-m+c)*(-x+p)-(-m+f)*(-x+d),C=-b+v-(-b+p),A=-y+f-(-y+g),R=(-y+g)*(-b+p)-(-y+f)*(-b+v),M=w*A-C*E,Math.abs(M)<.1?(M+=10.1,I.push(f-m,p-x,U,j,W,N),I.push(f+m,p+x,U,j,W,N)):(l=(E*R-A*_)/M,u=(C*_-w*R)/M,L=(l-f)*(l-f)+(u-p)+(u-p),L>19600?(T=m-y,S=x-b,F=Math.sqrt(T*T+S*S),T/=F,S/=F,T*=k,S*=k,I.push(f-T,p-S),I.push(U,j,W,N),I.push(f+T,p+S),I.push(U,j,W,N),I.push(f-T,p-S),I.push(U,j,W,N),O++):(I.push(l,u),I.push(U,j,W,N),I.push(f-(l-f),p-(u-p)),I.push(U,j,W,N)));for(c=n[2*(P-2)],d=n[2*(P-2)+1],f=n[2*(P-1)],p=n[2*(P-1)+1],m=-(d-p),x=c-f,F=Math.sqrt(m*m+x*x),m/=F,x/=F,m*=k,x*=k,I.push(f-m,p-x),I.push(U,j,W,N),I.push(f+m,p+x),I.push(U,j,W,N),B.push(D),r=0;O>r;r++)B.push(D++);B.push(D-1)}},i.WebGLGraphics.buildComplexPoly=function(t,e){var r=t.points.slice();if(!(r.length<6)){var n=e.indices;e.points=r,e.alpha=t.fillAlpha,e.color=i.hex2rgb(t.fillColor);for(var o,s,a=1/0,h=-1/0,l=1/0,u=-1/0,c=0;c<r.length;c+=2)o=r[c],s=r[c+1],a=a>o?o:a,h=o>h?o:h,l=l>s?s:l,u=s>u?s:u;r.push(a,l,h,l,h,u,a,u);var d=r.length/2;for(c=0;d>c;c++)n.push(c)}},i.WebGLGraphics.buildPoly=function(t,e){var r=t.points;if(!(r.length<6)){var n=e.points,o=e.indices,s=r.length/2,a=i.hex2rgb(t.fillColor),h=t.fillAlpha,l=a[0]*h,u=a[1]*h,c=a[2]*h,d=i.PolyK.Triangulate(r),f=n.length/6,p=0;for(p=0;p<d.length;p+=3)o.push(d[p]+f),o.push(d[p]+f),o.push(d[p+1]+f),o.push(d[p+2]+f),o.push(d[p+2]+f);for(p=0;s>p;p++)n.push(r[2*p],r[2*p+1],l,u,c,h)}},i.WebGLGraphics.graphicsDataPool=[],i.WebGLGraphicsData=function(t){this.gl=t,this.color=[0,0,0],this.points=[],this.indices=[],this.lastIndex=0,this.buffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),this.mode=1,this.alpha=1,this.dirty=!0},i.WebGLGraphicsData.prototype.reset=function(){this.points=[],this.indices=[],this.lastIndex=0},i.WebGLGraphicsData.prototype.upload=function(){var t=this.gl;this.glPoints=new Float32Array(this.points),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,this.glPoints,t.STATIC_DRAW),this.glIndicies=new Uint16Array(this.indices),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.glIndicies,t.STATIC_DRAW),this.dirty=!1},i.glContexts=[],i.WebGLRenderer=function(t,e,r,n,o,s){i.defaultRenderer||(i.sayHello("webGL"),i.defaultRenderer=this),this.type=i.WEBGL_RENDERER,this.transparent=!!n,this.preserveDrawingBuffer=s,this.width=t||800,this.height=e||600,this.view=r||document.createElement("canvas"),this.view.width=this.width,this.view.height=this.height,this.contextLost=this.handleContextLost.bind(this),this.contextRestoredLost=this.handleContextRestored.bind(this),this.view.addEventListener("webglcontextlost",this.contextLost,!1),this.view.addEventListener("webglcontextrestored",this.contextRestoredLost,!1),this.options={alpha:this.transparent,antialias:!!o,premultipliedAlpha:!!n,stencil:!0,preserveDrawingBuffer:s};var a=null;if(["experimental-webgl","webgl"].forEach(function(t){try{a=a||this.view.getContext(t,this.options)}catch(e){}},this),!a)throw new Error("This browser does not support webGL. Try using the canvas renderer"+this);this.gl=a,this.glContextId=a.id=i.WebGLRenderer.glContextId++,i.glContexts[this.glContextId]=a,i.blendModesWebGL||(i.blendModesWebGL=[],i.blendModesWebGL[i.blendModes.NORMAL]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.ADD]=[a.SRC_ALPHA,a.DST_ALPHA],i.blendModesWebGL[i.blendModes.MULTIPLY]=[a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.SCREEN]=[a.SRC_ALPHA,a.ONE],i.blendModesWebGL[i.blendModes.OVERLAY]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.DARKEN]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.LIGHTEN]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.COLOR_DODGE]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.COLOR_BURN]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.HARD_LIGHT]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.SOFT_LIGHT]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.DIFFERENCE]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.EXCLUSION]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.HUE]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.SATURATION]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.COLOR]=[a.ONE,a.ONE_MINUS_SRC_ALPHA],i.blendModesWebGL[i.blendModes.LUMINOSITY]=[a.ONE,a.ONE_MINUS_SRC_ALPHA]),this.projection=new i.Point,this.projection.x=this.width/2,this.projection.y=-this.height/2,this.offset=new i.Point(0,0),this.resize(this.width,this.height),this.contextLost=!1,this.shaderManager=new i.WebGLShaderManager(a),this.spriteBatch=new i.WebGLSpriteBatch(a),this.maskManager=new i.WebGLMaskManager(a),this.filterManager=new i.WebGLFilterManager(a,this.transparent),this.stencilManager=new i.WebGLStencilManager(a),this.blendModeManager=new i.WebGLBlendModeManager(a),this.renderSession={},this.renderSession.gl=this.gl,this.renderSession.drawCount=0,this.renderSession.shaderManager=this.shaderManager,this.renderSession.maskManager=this.maskManager,this.renderSession.filterManager=this.filterManager,this.renderSession.blendModeManager=this.blendModeManager,this.renderSession.spriteBatch=this.spriteBatch,this.renderSession.stencilManager=this.stencilManager,this.renderSession.renderer=this,a.useProgram(this.shaderManager.defaultShader.program),a.disable(a.DEPTH_TEST),a.disable(a.CULL_FACE),a.enable(a.BLEND),a.colorMask(!0,!0,!0,this.transparent)},i.WebGLRenderer.prototype.constructor=i.WebGLRenderer,i.WebGLRenderer.prototype.render=function(t){if(!this.contextLost){this.__stage!==t&&(t.interactive&&t.interactionManager.removeEvents(),this.__stage=t),i.WebGLRenderer.updateTextures(),t.updateTransform(),t._interactive&&(t._interactiveEventsAdded||(t._interactiveEventsAdded=!0,t.interactionManager.setTarget(this)));var e=this.gl;e.viewport(0,0,this.width,this.height),e.bindFramebuffer(e.FRAMEBUFFER,null),this.transparent?e.clearColor(0,0,0,0):e.clearColor(t.backgroundColorSplit[0],t.backgroundColorSplit[1],t.backgroundColorSplit[2],1),e.clear(e.COLOR_BUFFER_BIT),this.renderDisplayObject(t,this.projection),t.interactive?t._interactiveEventsAdded||(t._interactiveEventsAdded=!0,t.interactionManager.setTarget(this)):t._interactiveEventsAdded&&(t._interactiveEventsAdded=!1,t.interactionManager.setTarget(this))}},i.WebGLRenderer.prototype.renderDisplayObject=function(t,e,r){this.renderSession.blendModeManager.setBlendMode(i.blendModes.NORMAL),this.renderSession.drawCount=0,this.renderSession.currentBlendMode=9999,this.renderSession.projection=e,this.renderSession.offset=this.offset,this.spriteBatch.begin(this.renderSession),this.filterManager.begin(this.renderSession,r),t._renderWebGL(this.renderSession),this.spriteBatch.end()},i.WebGLRenderer.updateTextures=function(){var t=0;for(t=0;t<i.Texture.frameUpdates.length;t++)i.WebGLRenderer.updateTextureFrame(i.Texture.frameUpdates[t]);for(t=0;t<i.texturesToDestroy.length;t++)i.WebGLRenderer.destroyTexture(i.texturesToDestroy[t]);i.texturesToUpdate.length=0,i.texturesToDestroy.length=0,i.Texture.frameUpdates.length=0},i.WebGLRenderer.destroyTexture=function(t){for(var e=t._glTextures.length-1;e>=0;e--){var r=t._glTextures[e],n=i.glContexts[e];n&&r&&n.deleteTexture(r)}t._glTextures.length=0},i.WebGLRenderer.updateTextureFrame=function(t){t._updateWebGLuvs()},i.WebGLRenderer.prototype.resize=function(t,e){this.width=t,this.height=e,this.view.width=t,this.view.height=e,this.gl.viewport(0,0,this.width,this.height),this.projection.x=this.width/2,this.projection.y=-this.height/2},i.createWebGLTexture=function(t,e){return t.hasLoaded&&(t._glTextures[e.id]=e.createTexture(),e.bindTexture(e.TEXTURE_2D,t._glTextures[e.id]),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultipliedAlpha),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t.source),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t.scaleMode===i.scaleModes.LINEAR?e.LINEAR:e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.scaleMode===i.scaleModes.LINEAR?e.LINEAR:e.NEAREST),t._powerOf2?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),e.bindTexture(e.TEXTURE_2D,null),t._dirty[e.id]=!1),t._glTextures[e.id]},i.updateWebGLTexture=function(t,e){t._glTextures[e.id]&&(e.bindTexture(e.TEXTURE_2D,t._glTextures[e.id]),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultipliedAlpha),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t.source),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t.scaleMode===i.scaleModes.LINEAR?e.LINEAR:e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.scaleMode===i.scaleModes.LINEAR?e.LINEAR:e.NEAREST),t._powerOf2?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),t._dirty[e.id]=!1)
},i.WebGLRenderer.prototype.handleContextLost=function(t){t.preventDefault(),this.contextLost=!0},i.WebGLRenderer.prototype.handleContextRestored=function(){try{this.gl=this.view.getContext("experimental-webgl",this.options)}catch(t){try{this.gl=this.view.getContext("webgl",this.options)}catch(e){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}}var r=this.gl;r.id=i.WebGLRenderer.glContextId++,this.shaderManager.setContext(r),this.spriteBatch.setContext(r),this.primitiveBatch.setContext(r),this.maskManager.setContext(r),this.filterManager.setContext(r),this.renderSession.gl=this.gl,r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.enable(r.BLEND),r.colorMask(!0,!0,!0,this.transparent),this.gl.viewport(0,0,this.width,this.height);for(var n in i.TextureCache){var o=i.TextureCache[n].baseTexture;o._glTextures=[]}this.contextLost=!1},i.WebGLRenderer.prototype.destroy=function(){this.view.removeEventListener("webglcontextlost",this.contextLost),this.view.removeEventListener("webglcontextrestored",this.contextRestoredLost),i.glContexts[this.glContextId]=null,this.projection=null,this.offset=null,this.shaderManager.destroy(),this.spriteBatch.destroy(),this.primitiveBatch.destroy(),this.maskManager.destroy(),this.filterManager.destroy(),this.shaderManager=null,this.spriteBatch=null,this.maskManager=null,this.filterManager=null,this.gl=null,this.renderSession=null},i.WebGLRenderer.glContextId=0,i.WebGLBlendModeManager=function(t){this.gl=t,this.currentBlendMode=99999},i.WebGLBlendModeManager.prototype.setBlendMode=function(t){if(this.currentBlendMode===t)return!1;this.currentBlendMode=t;var e=i.blendModesWebGL[this.currentBlendMode];return this.gl.blendFunc(e[0],e[1]),!0},i.WebGLBlendModeManager.prototype.destroy=function(){this.gl=null},i.WebGLMaskManager=function(t){this.maskStack=[],this.maskPosition=0,this.setContext(t),this.reverse=!1,this.count=0},i.WebGLMaskManager.prototype.setContext=function(t){this.gl=t},i.WebGLMaskManager.prototype.pushMask=function(t,e){var r=e.gl;t.dirty&&i.WebGLGraphics.updateGraphics(t,r),t._webGL[r.id].data.length&&e.stencilManager.pushStencil(t,t._webGL[r.id].data[0],e)},i.WebGLMaskManager.prototype.popMask=function(t,e){var r=this.gl;e.stencilManager.popStencil(t,t._webGL[r.id].data[0],e)},i.WebGLMaskManager.prototype.destroy=function(){this.maskStack=null,this.gl=null},i.WebGLStencilManager=function(t){this.stencilStack=[],this.setContext(t),this.reverse=!0,this.count=0},i.WebGLStencilManager.prototype.setContext=function(t){this.gl=t},i.WebGLStencilManager.prototype.pushStencil=function(t,e,r){var i=this.gl;this.bindGraphics(t,e,r),0===this.stencilStack.length&&(i.enable(i.STENCIL_TEST),i.clear(i.STENCIL_BUFFER_BIT),this.reverse=!0,this.count=0),this.stencilStack.push(e);var n=this.count;i.colorMask(!1,!1,!1,!1),i.stencilFunc(i.ALWAYS,0,255),i.stencilOp(i.KEEP,i.KEEP,i.INVERT),1===e.mode?(i.drawElements(i.TRIANGLE_FAN,e.indices.length-4,i.UNSIGNED_SHORT,0),this.reverse?(i.stencilFunc(i.EQUAL,255-n,255),i.stencilOp(i.KEEP,i.KEEP,i.DECR)):(i.stencilFunc(i.EQUAL,n,255),i.stencilOp(i.KEEP,i.KEEP,i.INCR)),i.drawElements(i.TRIANGLE_FAN,4,i.UNSIGNED_SHORT,2*(e.indices.length-4)),this.reverse?i.stencilFunc(i.EQUAL,255-(n+1),255):i.stencilFunc(i.EQUAL,n+1,255),this.reverse=!this.reverse):(this.reverse?(i.stencilFunc(i.EQUAL,n,255),i.stencilOp(i.KEEP,i.KEEP,i.INCR)):(i.stencilFunc(i.EQUAL,255-n,255),i.stencilOp(i.KEEP,i.KEEP,i.DECR)),i.drawElements(i.TRIANGLE_STRIP,e.indices.length,i.UNSIGNED_SHORT,0),this.reverse?i.stencilFunc(i.EQUAL,n+1,255):i.stencilFunc(i.EQUAL,255-(n+1),255)),i.colorMask(!0,!0,!0,!0),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),this.count++},i.WebGLStencilManager.prototype.bindGraphics=function(t,e,r){this._currentGraphics=t;var n,o=this.gl,s=r.projection,a=r.offset;1===e.mode?(n=r.shaderManager.complexPrimativeShader,r.shaderManager.setShader(n),o.uniformMatrix3fv(n.translationMatrix,!1,t.worldTransform.toArray(!0)),o.uniform2f(n.projectionVector,s.x,-s.y),o.uniform2f(n.offsetVector,-a.x,-a.y),o.uniform3fv(n.tintColor,i.hex2rgb(t.tint)),o.uniform3fv(n.color,e.color),o.uniform1f(n.alpha,t.worldAlpha*e.alpha),o.bindBuffer(o.ARRAY_BUFFER,e.buffer),o.vertexAttribPointer(n.aVertexPosition,2,o.FLOAT,!1,8,0),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.indexBuffer)):(n=r.shaderManager.primitiveShader,r.shaderManager.setShader(n),o.uniformMatrix3fv(n.translationMatrix,!1,t.worldTransform.toArray(!0)),o.uniform2f(n.projectionVector,s.x,-s.y),o.uniform2f(n.offsetVector,-a.x,-a.y),o.uniform3fv(n.tintColor,i.hex2rgb(t.tint)),o.uniform1f(n.alpha,t.worldAlpha),o.bindBuffer(o.ARRAY_BUFFER,e.buffer),o.vertexAttribPointer(n.aVertexPosition,2,o.FLOAT,!1,24,0),o.vertexAttribPointer(n.colorAttribute,4,o.FLOAT,!1,24,8),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.indexBuffer))},i.WebGLStencilManager.prototype.popStencil=function(t,e,r){var i=this.gl;if(this.stencilStack.pop(),this.count--,0===this.stencilStack.length)i.disable(i.STENCIL_TEST);else{var n=this.count;this.bindGraphics(t,e,r),i.colorMask(!1,!1,!1,!1),1===e.mode?(this.reverse=!this.reverse,this.reverse?(i.stencilFunc(i.EQUAL,255-(n+1),255),i.stencilOp(i.KEEP,i.KEEP,i.INCR)):(i.stencilFunc(i.EQUAL,n+1,255),i.stencilOp(i.KEEP,i.KEEP,i.DECR)),i.drawElements(i.TRIANGLE_FAN,4,i.UNSIGNED_SHORT,2*(e.indices.length-4)),i.stencilFunc(i.ALWAYS,0,255),i.stencilOp(i.KEEP,i.KEEP,i.INVERT),i.drawElements(i.TRIANGLE_FAN,e.indices.length-4,i.UNSIGNED_SHORT,0),this.reverse?i.stencilFunc(i.EQUAL,n,255):i.stencilFunc(i.EQUAL,255-n,255)):(this.reverse?(i.stencilFunc(i.EQUAL,n+1,255),i.stencilOp(i.KEEP,i.KEEP,i.DECR)):(i.stencilFunc(i.EQUAL,255-(n+1),255),i.stencilOp(i.KEEP,i.KEEP,i.INCR)),i.drawElements(i.TRIANGLE_STRIP,e.indices.length,i.UNSIGNED_SHORT,0),this.reverse?i.stencilFunc(i.EQUAL,n,255):i.stencilFunc(i.EQUAL,255-n,255)),i.colorMask(!0,!0,!0,!0),i.stencilOp(i.KEEP,i.KEEP,i.KEEP)}},i.WebGLStencilManager.prototype.destroy=function(){this.maskStack=null,this.gl=null},i.WebGLShaderManager=function(t){this.maxAttibs=10,this.attribState=[],this.tempAttribState=[],this.shaderMap=[];for(var e=0;e<this.maxAttibs;e++)this.attribState[e]=!1;this.setContext(t)},i.WebGLShaderManager.prototype.setContext=function(t){this.gl=t,this.primitiveShader=new i.PrimitiveShader(t),this.complexPrimativeShader=new i.ComplexPrimitiveShader(t),this.defaultShader=new i.PixiShader(t),this.fastShader=new i.PixiFastShader(t),this.stripShader=new i.StripShader(t),this.setShader(this.defaultShader)},i.WebGLShaderManager.prototype.setAttribs=function(t){var e;for(e=0;e<this.tempAttribState.length;e++)this.tempAttribState[e]=!1;for(e=0;e<t.length;e++){var r=t[e];this.tempAttribState[r]=!0}var i=this.gl;for(e=0;e<this.attribState.length;e++)this.attribState[e]!==this.tempAttribState[e]&&(this.attribState[e]=this.tempAttribState[e],this.tempAttribState[e]?i.enableVertexAttribArray(e):i.disableVertexAttribArray(e))},i.WebGLShaderManager.prototype.setShader=function(t){return this._currentId===t._UID?!1:(this._currentId=t._UID,this.currentShader=t,this.gl.useProgram(t.program),this.setAttribs(t.attributes),!0)},i.WebGLShaderManager.prototype.destroy=function(){this.attribState=null,this.tempAttribState=null,this.primitiveShader.destroy(),this.defaultShader.destroy(),this.fastShader.destroy(),this.stripShader.destroy(),this.gl=null},i.WebGLSpriteBatch=function(t){this.vertSize=6,this.size=2e3;var e=4*this.size*this.vertSize,r=6*this.size;this.vertices=new Float32Array(e),this.indices=new Uint16Array(r),this.lastIndexCount=0;for(var i=0,n=0;r>i;i+=6,n+=4)this.indices[i+0]=n+0,this.indices[i+1]=n+1,this.indices[i+2]=n+2,this.indices[i+3]=n+0,this.indices[i+4]=n+2,this.indices[i+5]=n+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.setContext(t),this.dirty=!0,this.textures=[],this.blendModes=[]},i.WebGLSpriteBatch.prototype.setContext=function(t){this.gl=t,this.vertexBuffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,this.vertices,t.DYNAMIC_DRAW),this.currentBlendMode=99999},i.WebGLSpriteBatch.prototype.begin=function(t){this.renderSession=t,this.shader=this.renderSession.shaderManager.defaultShader,this.start()},i.WebGLSpriteBatch.prototype.end=function(){this.flush()},i.WebGLSpriteBatch.prototype.render=function(t){var e=t.texture;this.currentBatchSize>=this.size&&(this.flush(),this.currentBaseTexture=e.baseTexture);var r=e._uvs;if(r){var i,n,o,s,a=t.worldAlpha,h=t.tint,l=this.vertices,u=t.anchor.x,c=t.anchor.y;if(e.trim){var d=e.trim;n=d.x-u*d.width,i=n+e.crop.width,s=d.y-c*d.height,o=s+e.crop.height}else i=e.frame.width*(1-u),n=e.frame.width*-u,o=e.frame.height*(1-c),s=e.frame.height*-c;var f=4*this.currentBatchSize*this.vertSize,p=t.worldTransform,g=p.a,v=p.c,m=p.b,x=p.d,y=p.tx,b=p.ty;l[f++]=g*n+m*s+y,l[f++]=x*s+v*n+b,l[f++]=r.x0,l[f++]=r.y0,l[f++]=a,l[f++]=h,l[f++]=g*i+m*s+y,l[f++]=x*s+v*i+b,l[f++]=r.x1,l[f++]=r.y1,l[f++]=a,l[f++]=h,l[f++]=g*i+m*o+y,l[f++]=x*o+v*i+b,l[f++]=r.x2,l[f++]=r.y2,l[f++]=a,l[f++]=h,l[f++]=g*n+m*o+y,l[f++]=x*o+v*n+b,l[f++]=r.x3,l[f++]=r.y3,l[f++]=a,l[f++]=h,this.textures[this.currentBatchSize]=t.texture.baseTexture,this.blendModes[this.currentBatchSize]=t.blendMode,this.currentBatchSize++}},i.WebGLSpriteBatch.prototype.renderTilingSprite=function(t){var e=t.tilingTexture;this.currentBatchSize>=this.size&&(this.flush(),this.currentBaseTexture=e.baseTexture),t._uvs||(t._uvs=new i.TextureUvs);var r=t._uvs;t.tilePosition.x%=e.baseTexture.width*t.tileScaleOffset.x,t.tilePosition.y%=e.baseTexture.height*t.tileScaleOffset.y;var n=t.tilePosition.x/(e.baseTexture.width*t.tileScaleOffset.x),o=t.tilePosition.y/(e.baseTexture.height*t.tileScaleOffset.y),s=t.width/e.baseTexture.width/(t.tileScale.x*t.tileScaleOffset.x),a=t.height/e.baseTexture.height/(t.tileScale.y*t.tileScaleOffset.y);r.x0=0-n,r.y0=0-o,r.x1=1*s-n,r.y1=0-o,r.x2=1*s-n,r.y2=1*a-o,r.x3=0-n,r.y3=1*a-o;var h=t.worldAlpha,l=t.tint,u=this.vertices,c=t.width,d=t.height,f=t.anchor.x,p=t.anchor.y,g=c*(1-f),v=c*-f,m=d*(1-p),x=d*-p,y=4*this.currentBatchSize*this.vertSize,b=t.worldTransform,T=b.a,S=b.c,w=b.b,E=b.d,_=b.tx,C=b.ty;u[y++]=T*v+w*x+_,u[y++]=E*x+S*v+C,u[y++]=r.x0,u[y++]=r.y0,u[y++]=h,u[y++]=l,u[y++]=T*g+w*x+_,u[y++]=E*x+S*g+C,u[y++]=r.x1,u[y++]=r.y1,u[y++]=h,u[y++]=l,u[y++]=T*g+w*m+_,u[y++]=E*m+S*g+C,u[y++]=r.x2,u[y++]=r.y2,u[y++]=h,u[y++]=l,u[y++]=T*v+w*m+_,u[y++]=E*m+S*v+C,u[y++]=r.x3,u[y++]=r.y3,u[y++]=h,u[y++]=l,this.textures[this.currentBatchSize]=e.baseTexture,this.blendModes[this.currentBatchSize]=t.blendMode,this.currentBatchSize++},i.WebGLSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var t=this.gl;if(this.renderSession.shaderManager.setShader(this.renderSession.shaderManager.defaultShader),this.dirty){this.dirty=!1,t.activeTexture(t.TEXTURE0),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var e=this.renderSession.projection;t.uniform2f(this.shader.projectionVector,e.x,e.y);var r=4*this.vertSize;t.vertexAttribPointer(this.shader.aVertexPosition,2,t.FLOAT,!1,r,0),t.vertexAttribPointer(this.shader.aTextureCoord,2,t.FLOAT,!1,r,8),t.vertexAttribPointer(this.shader.colorAttribute,2,t.FLOAT,!1,r,16)}if(this.currentBatchSize>.5*this.size)t.bufferSubData(t.ARRAY_BUFFER,0,this.vertices);else{var i=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);t.bufferSubData(t.ARRAY_BUFFER,0,i)}for(var n,o,s=0,a=0,h=null,l=this.renderSession.blendModeManager.currentBlendMode,u=0,c=this.currentBatchSize;c>u;u++)n=this.textures[u],o=this.blendModes[u],(h!==n||l!==o)&&(this.renderBatch(h,s,a),a=u,s=0,h=n,l=o,this.renderSession.blendModeManager.setBlendMode(l)),s++;this.renderBatch(h,s,a),this.currentBatchSize=0}},i.WebGLSpriteBatch.prototype.renderBatch=function(t,e,r){if(0!==e){var n=this.gl;n.bindTexture(n.TEXTURE_2D,t._glTextures[n.id]||i.createWebGLTexture(t,n)),t._dirty[n.id]&&i.updateWebGLTexture(this.currentBaseTexture,n),n.drawElements(n.TRIANGLES,6*e,n.UNSIGNED_SHORT,6*r*2),this.renderSession.drawCount++}},i.WebGLSpriteBatch.prototype.stop=function(){this.flush()},i.WebGLSpriteBatch.prototype.start=function(){this.dirty=!0},i.WebGLSpriteBatch.prototype.destroy=function(){this.vertices=null,this.indices=null,this.gl.deleteBuffer(this.vertexBuffer),this.gl.deleteBuffer(this.indexBuffer),this.currentBaseTexture=null,this.gl=null},i.WebGLFastSpriteBatch=function(t){this.vertSize=10,this.maxSize=6e3,this.size=this.maxSize;var e=4*this.size*this.vertSize,r=6*this.maxSize;this.vertices=new Float32Array(e),this.indices=new Uint16Array(r),this.vertexBuffer=null,this.indexBuffer=null,this.lastIndexCount=0;for(var i=0,n=0;r>i;i+=6,n+=4)this.indices[i+0]=n+0,this.indices[i+1]=n+1,this.indices[i+2]=n+2,this.indices[i+3]=n+0,this.indices[i+4]=n+2,this.indices[i+5]=n+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.currentBlendMode=0,this.renderSession=null,this.shader=null,this.matrix=null,this.setContext(t)},i.WebGLFastSpriteBatch.prototype.setContext=function(t){this.gl=t,this.vertexBuffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,this.vertices,t.DYNAMIC_DRAW)},i.WebGLFastSpriteBatch.prototype.begin=function(t,e){this.renderSession=e,this.shader=this.renderSession.shaderManager.fastShader,this.matrix=t.worldTransform.toArray(!0),this.start()},i.WebGLFastSpriteBatch.prototype.end=function(){this.flush()},i.WebGLFastSpriteBatch.prototype.render=function(t){var e=t.children,r=e[0];if(r.texture._uvs){this.currentBaseTexture=r.texture.baseTexture,r.blendMode!==this.renderSession.blendModeManager.currentBlendMode&&(this.flush(),this.renderSession.blendModeManager.setBlendMode(r.blendMode));for(var i=0,n=e.length;n>i;i++)this.renderSprite(e[i]);this.flush()}},i.WebGLFastSpriteBatch.prototype.renderSprite=function(t){if(t.visible&&(t.texture.baseTexture===this.currentBaseTexture||(this.flush(),this.currentBaseTexture=t.texture.baseTexture,t.texture._uvs))){var e,r,i,n,o,s,a,h,l=this.vertices;if(e=t.texture._uvs,r=t.texture.frame.width,i=t.texture.frame.height,t.texture.trim){var u=t.texture.trim;o=u.x-t.anchor.x*u.width,n=o+t.texture.crop.width,a=u.y-t.anchor.y*u.height,s=a+t.texture.crop.height}else n=t.texture.frame.width*(1-t.anchor.x),o=t.texture.frame.width*-t.anchor.x,s=t.texture.frame.height*(1-t.anchor.y),a=t.texture.frame.height*-t.anchor.y;h=4*this.currentBatchSize*this.vertSize,l[h++]=o,l[h++]=a,l[h++]=t.position.x,l[h++]=t.position.y,l[h++]=t.scale.x,l[h++]=t.scale.y,l[h++]=t.rotation,l[h++]=e.x0,l[h++]=e.y1,l[h++]=t.alpha,l[h++]=n,l[h++]=a,l[h++]=t.position.x,l[h++]=t.position.y,l[h++]=t.scale.x,l[h++]=t.scale.y,l[h++]=t.rotation,l[h++]=e.x1,l[h++]=e.y1,l[h++]=t.alpha,l[h++]=n,l[h++]=s,l[h++]=t.position.x,l[h++]=t.position.y,l[h++]=t.scale.x,l[h++]=t.scale.y,l[h++]=t.rotation,l[h++]=e.x2,l[h++]=e.y2,l[h++]=t.alpha,l[h++]=o,l[h++]=s,l[h++]=t.position.x,l[h++]=t.position.y,l[h++]=t.scale.x,l[h++]=t.scale.y,l[h++]=t.rotation,l[h++]=e.x3,l[h++]=e.y3,l[h++]=t.alpha,this.currentBatchSize++,this.currentBatchSize>=this.size&&this.flush()}},i.WebGLFastSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var t=this.gl;if(this.currentBaseTexture._glTextures[t.id]||i.createWebGLTexture(this.currentBaseTexture,t),t.bindTexture(t.TEXTURE_2D,this.currentBaseTexture._glTextures[t.id]),this.currentBatchSize>.5*this.size)t.bufferSubData(t.ARRAY_BUFFER,0,this.vertices);else{var e=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);t.bufferSubData(t.ARRAY_BUFFER,0,e)}t.drawElements(t.TRIANGLES,6*this.currentBatchSize,t.UNSIGNED_SHORT,0),this.currentBatchSize=0,this.renderSession.drawCount++}},i.WebGLFastSpriteBatch.prototype.stop=function(){this.flush()},i.WebGLFastSpriteBatch.prototype.start=function(){var t=this.gl;t.activeTexture(t.TEXTURE0),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var e=this.renderSession.projection;t.uniform2f(this.shader.projectionVector,e.x,e.y),t.uniformMatrix3fv(this.shader.uMatrix,!1,this.matrix);var r=4*this.vertSize;t.vertexAttribPointer(this.shader.aVertexPosition,2,t.FLOAT,!1,r,0),t.vertexAttribPointer(this.shader.aPositionCoord,2,t.FLOAT,!1,r,8),t.vertexAttribPointer(this.shader.aScale,2,t.FLOAT,!1,r,16),t.vertexAttribPointer(this.shader.aRotation,1,t.FLOAT,!1,r,24),t.vertexAttribPointer(this.shader.aTextureCoord,2,t.FLOAT,!1,r,28),t.vertexAttribPointer(this.shader.colorAttribute,1,t.FLOAT,!1,r,36)},i.WebGLFilterManager=function(t,e){this.transparent=e,this.filterStack=[],this.offsetX=0,this.offsetY=0,this.setContext(t)},i.WebGLFilterManager.prototype.setContext=function(t){this.gl=t,this.texturePool=[],this.initShaderBuffers()},i.WebGLFilterManager.prototype.begin=function(t,e){this.renderSession=t,this.defaultShader=t.shaderManager.defaultShader;var r=this.renderSession.projection;this.width=2*r.x,this.height=2*-r.y,this.buffer=e},i.WebGLFilterManager.prototype.pushFilter=function(t){var e=this.gl,r=this.renderSession.projection,n=this.renderSession.offset;t._filterArea=t.target.filterArea||t.target.getBounds(),this.filterStack.push(t);var o=t.filterPasses[0];this.offsetX+=t._filterArea.x,this.offsetY+=t._filterArea.y;var s=this.texturePool.pop();s?s.resize(this.width,this.height):s=new i.FilterTexture(this.gl,this.width,this.height),e.bindTexture(e.TEXTURE_2D,s.texture);var a=t._filterArea,h=o.padding;a.x-=h,a.y-=h,a.width+=2*h,a.height+=2*h,a.x<0&&(a.x=0),a.width>this.width&&(a.width=this.width),a.y<0&&(a.y=0),a.height>this.height&&(a.height=this.height),e.bindFramebuffer(e.FRAMEBUFFER,s.frameBuffer),e.viewport(0,0,a.width,a.height),r.x=a.width/2,r.y=-a.height/2,n.x=-a.x,n.y=-a.y,this.renderSession.shaderManager.setShader(this.defaultShader),e.uniform2f(this.defaultShader.projectionVector,a.width/2,-a.height/2),e.uniform2f(this.defaultShader.offsetVector,-a.x,-a.y),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),t._glFilterTexture=s},i.WebGLFilterManager.prototype.popFilter=function(){var t=this.gl,e=this.filterStack.pop(),r=e._filterArea,n=e._glFilterTexture,o=this.renderSession.projection,s=this.renderSession.offset;if(e.filterPasses.length>1){t.viewport(0,0,5000,r.height),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=0,this.vertexArray[1]=r.height,this.vertexArray[2]=5000,this.vertexArray[3]=r.height,this.vertexArray[4]=0,this.vertexArray[5]=0,this.vertexArray[6]=5000,this.vertexArray[7]=0,t.bufferSubData(t.ARRAY_BUFFER,0,this.vertexArray),t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=5000/this.width,this.uvArray[5]=r.height/this.height,this.uvArray[6]=5000/this.width,this.uvArray[7]=r.height/this.height,t.bufferSubData(t.ARRAY_BUFFER,0,this.uvArray);var a=n,h=this.texturePool.pop();h||(h=new i.FilterTexture(this.gl,this.width,this.height)),h.resize(this.width,this.height),t.bindFramebuffer(t.FRAMEBUFFER,h.frameBuffer),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.BLEND);for(var l=0;l<e.filterPasses.length-1;l++){var u=e.filterPasses[l];t.bindFramebuffer(t.FRAMEBUFFER,h.frameBuffer),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,a.texture),this.applyFilterPass(u,r,5000,r.height);var c=a;a=h,h=c}t.enable(t.BLEND),n=a,this.texturePool.push(h)}var d=e.filterPasses[e.filterPasses.length-1];this.offsetX-=r.x,this.offsetY-=r.y;var f=this.width,p=this.height,g=0,v=0,m=this.buffer;if(0===this.filterStack.length)t.colorMask(!0,!0,!0,!0);else{var x=this.filterStack[this.filterStack.length-1];r=x._filterArea,f=5000,p=r.height,g=r.x,v=r.y,m=x._glFilterTexture.frameBuffer}o.x=f/2,o.y=-p/2,s.x=g,s.y=v,r=e._filterArea;var y=r.x-g,b=r.y-v;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=y,this.vertexArray[1]=b+r.height,this.vertexArray[2]=y+r.width,this.vertexArray[3]=b+r.height,this.vertexArray[4]=y,this.vertexArray[5]=b,this.vertexArray[6]=y+5000,this.vertexArray[7]=b,t.bufferSubData(t.ARRAY_BUFFER,0,this.vertexArray),t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=5000/this.width,this.uvArray[5]=r.height/this.height,this.uvArray[6]=r.width/this.width,this.uvArray[7]=r.height/this.height,t.bufferSubData(t.ARRAY_BUFFER,0,this.uvArray),t.viewport(0,0,f,p),t.bindFramebuffer(t.FRAMEBUFFER,m),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,n.texture),this.applyFilterPass(d,r,f,p),this.renderSession.shaderManager.setShader(this.defaultShader),t.uniform2f(this.defaultShader.projectionVector,f/2,-p/2),t.uniform2f(this.defaultShader.offsetVector,-g,-v),this.texturePool.push(n),e._glFilterTexture=null},i.WebGLFilterManager.prototype.applyFilterPass=function(t,e,r,n){var o=this.gl,s=t.shaders[o.id];s||(s=new i.PixiShader(o),s.fragmentSrc=t.fragmentSrc,s.uniforms=t.uniforms,s.init(),t.shaders[o.id]=s),this.renderSession.shaderManager.setShader(s),o.uniform2f(s.projectionVector,r/2,-n/2),o.uniform2f(s.offsetVector,0,0),t.uniforms.dimensions&&(t.uniforms.dimensions.value[0]=this.width,t.uniforms.dimensions.value[1]=this.height,t.uniforms.dimensions.value[2]=this.vertexArray[0],t.uniforms.dimensions.value[3]=this.vertexArray[5]),s.syncUniforms(),o.bindBuffer(o.ARRAY_BUFFER,this.vertexBuffer),o.vertexAttribPointer(s.aVertexPosition,2,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,this.uvBuffer),o.vertexAttribPointer(s.aTextureCoord,2,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,this.colorBuffer),o.vertexAttribPointer(s.colorAttribute,2,o.FLOAT,!1,0,0),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,this.indexBuffer),o.drawElements(o.TRIANGLES,6,o.UNSIGNED_SHORT,0),this.renderSession.drawCount++},i.WebGLFilterManager.prototype.initShaderBuffers=function(){var t=this.gl;this.vertexBuffer=t.createBuffer(),this.uvBuffer=t.createBuffer(),this.colorBuffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),this.vertexArray=new Float32Array([0,0,1,0,0,1,1,1]),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,this.vertexArray,t.STATIC_DRAW),this.uvArray=new Float32Array([0,0,1,0,0,1,1,1]),t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer),t.bufferData(t.ARRAY_BUFFER,this.uvArray,t.STATIC_DRAW),this.colorArray=new Float32Array([1,16777215,1,16777215,1,16777215,1,16777215]),t.bindBuffer(t.ARRAY_BUFFER,this.colorBuffer),t.bufferData(t.ARRAY_BUFFER,this.colorArray,t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,1,3,2]),t.STATIC_DRAW)},i.WebGLFilterManager.prototype.destroy=function(){var t=this.gl;this.filterStack=null,this.offsetX=0,this.offsetY=0;for(var e=0;e<this.texturePool.length;e++)this.texturePool[e].destroy();this.texturePool=null,t.deleteBuffer(this.vertexBuffer),t.deleteBuffer(this.uvBuffer),t.deleteBuffer(this.colorBuffer),t.deleteBuffer(this.indexBuffer)},i.FilterTexture=function(t,e,r,n){this.gl=t,this.frameBuffer=t.createFramebuffer(),this.texture=t.createTexture(),n=n||i.scaleModes.DEFAULT,t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n===i.scaleModes.LINEAR?t.LINEAR:t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n===i.scaleModes.LINEAR?t.LINEAR:t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer),t.bindFramebuffer(t.FRAMEBUFFER,this.frameBuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture,0),this.renderBuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.renderBuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,this.renderBuffer),this.resize(e,r)},i.FilterTexture.prototype.clear=function(){var t=this.gl;t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)},i.FilterTexture.prototype.resize=function(t,e){if(this.width!==t||this.height!==e){this.width=t,this.height=e;var r=this.gl;r.bindTexture(r.TEXTURE_2D,this.texture),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t,e,0,r.RGBA,r.UNSIGNED_BYTE,null),r.bindRenderbuffer(r.RENDERBUFFER,this.renderBuffer),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,t,e)}},i.FilterTexture.prototype.destroy=function(){var t=this.gl;t.deleteFramebuffer(this.frameBuffer),t.deleteTexture(this.texture),this.frameBuffer=null,this.texture=null},i.CanvasMaskManager=function(){},i.CanvasMaskManager.prototype.pushMask=function(t,e){e.save();var r=t.alpha,n=t.worldTransform;e.setTransform(n.a,n.c,n.b,n.d,n.tx,n.ty),i.CanvasGraphics.renderGraphicsMask(t,e),e.clip(),t.worldAlpha=r},i.CanvasMaskManager.prototype.popMask=function(t){t.restore()},i.CanvasTinter=function(){},i.CanvasTinter.getTintedTexture=function(t,e){var r=t.texture;e=i.CanvasTinter.roundColor(e);var n="#"+("00000"+(0|e).toString(16)).substr(-6);if(r.tintCache=r.tintCache||{},r.tintCache[n])return r.tintCache[n];var o=i.CanvasTinter.canvas||document.createElement("canvas");if(i.CanvasTinter.tintMethod(r,e,o),i.CanvasTinter.convertTintToImage){var s=new Image;s.src=o.toDataURL(),r.tintCache[n]=s}else r.tintCache[n]=o,i.CanvasTinter.canvas=null;return o},i.CanvasTinter.tintWithMultiply=function(t,e,r){var i=r.getContext("2d"),n=t.frame;r.width=n.width,r.height=n.height,i.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),i.fillRect(0,0,n.width,n.height),i.globalCompositeOperation="multiply",i.drawImage(t.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height),i.globalCompositeOperation="destination-atop",i.drawImage(t.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)},i.CanvasTinter.tintWithOverlay=function(t,e,r){var i=r.getContext("2d"),n=t.frame;r.width=n.width,r.height=n.height,i.globalCompositeOperation="copy",i.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),i.fillRect(0,0,n.width,n.height),i.globalCompositeOperation="destination-atop",i.drawImage(t.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)},i.CanvasTinter.tintWithPerPixel=function(t,e,r){var n=r.getContext("2d"),o=t.frame;r.width=o.width,r.height=o.height,n.globalCompositeOperation="copy",n.drawImage(t.baseTexture.source,o.x,o.y,o.width,o.height,0,0,o.width,o.height);for(var s=i.hex2rgb(e),a=s[0],h=s[1],l=s[2],u=n.getImageData(0,0,o.width,o.height),c=u.data,d=0;d<c.length;d+=4)c[d+0]*=a,c[d+1]*=h,c[d+2]*=l;n.putImageData(u,0,0)},i.CanvasTinter.roundColor=function(t){var e=i.CanvasTinter.cacheStepsPerColorChannel,r=i.hex2rgb(t);return r[0]=Math.min(255,r[0]/e*e),r[1]=Math.min(255,r[1]/e*e),r[2]=Math.min(255,r[2]/e*e),i.rgb2hex(r)},i.CanvasTinter.cacheStepsPerColorChannel=8,i.CanvasTinter.convertTintToImage=!1,i.CanvasTinter.canUseMultiply=i.canUseNewCanvasBlendModes(),i.CanvasTinter.tintMethod=i.CanvasTinter.canUseMultiply?i.CanvasTinter.tintWithMultiply:i.CanvasTinter.tintWithPerPixel,i.CanvasRenderer=function(t,e,r,n){i.defaultRenderer||(i.sayHello("Canvas"),i.defaultRenderer=this),this.type=i.CANVAS_RENDERER,this.clearBeforeRender=!0,this.transparent=!!n,i.blendModesCanvas||(i.blendModesCanvas=[],i.canUseNewCanvasBlendModes()?(i.blendModesCanvas[i.blendModes.NORMAL]="source-over",i.blendModesCanvas[i.blendModes.ADD]="lighter",i.blendModesCanvas[i.blendModes.MULTIPLY]="multiply",i.blendModesCanvas[i.blendModes.SCREEN]="screen",i.blendModesCanvas[i.blendModes.OVERLAY]="overlay",i.blendModesCanvas[i.blendModes.DARKEN]="darken",i.blendModesCanvas[i.blendModes.LIGHTEN]="lighten",i.blendModesCanvas[i.blendModes.COLOR_DODGE]="color-dodge",i.blendModesCanvas[i.blendModes.COLOR_BURN]="color-burn",i.blendModesCanvas[i.blendModes.HARD_LIGHT]="hard-light",i.blendModesCanvas[i.blendModes.SOFT_LIGHT]="soft-light",i.blendModesCanvas[i.blendModes.DIFFERENCE]="difference",i.blendModesCanvas[i.blendModes.EXCLUSION]="exclusion",i.blendModesCanvas[i.blendModes.HUE]="hue",i.blendModesCanvas[i.blendModes.SATURATION]="saturation",i.blendModesCanvas[i.blendModes.COLOR]="color",i.blendModesCanvas[i.blendModes.LUMINOSITY]="luminosity"):(i.blendModesCanvas[i.blendModes.NORMAL]="source-over",i.blendModesCanvas[i.blendModes.ADD]="lighter",i.blendModesCanvas[i.blendModes.MULTIPLY]="source-over",i.blendModesCanvas[i.blendModes.SCREEN]="source-over",i.blendModesCanvas[i.blendModes.OVERLAY]="source-over",i.blendModesCanvas[i.blendModes.DARKEN]="source-over",i.blendModesCanvas[i.blendModes.LIGHTEN]="source-over",i.blendModesCanvas[i.blendModes.COLOR_DODGE]="source-over",i.blendModesCanvas[i.blendModes.COLOR_BURN]="source-over",i.blendModesCanvas[i.blendModes.HARD_LIGHT]="source-over",i.blendModesCanvas[i.blendModes.SOFT_LIGHT]="source-over",i.blendModesCanvas[i.blendModes.DIFFERENCE]="source-over",i.blendModesCanvas[i.blendModes.EXCLUSION]="source-over",i.blendModesCanvas[i.blendModes.HUE]="source-over",i.blendModesCanvas[i.blendModes.SATURATION]="source-over",i.blendModesCanvas[i.blendModes.COLOR]="source-over",i.blendModesCanvas[i.blendModes.LUMINOSITY]="source-over")),this.width=t||800,this.height=e||600,this.view=r||document.createElement("canvas"),this.context=this.view.getContext("2d",{alpha:this.transparent}),this.refresh=!0,this.view.width=this.width,this.view.height=this.height,this.count=0,this.maskManager=new i.CanvasMaskManager,this.renderSession={context:this.context,maskManager:this.maskManager,scaleMode:null,smoothProperty:null,roundPixels:!1},"imageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="imageSmoothingEnabled":"webkitImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="webkitImageSmoothingEnabled":"mozImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="mozImageSmoothingEnabled":"oImageSmoothingEnabled"in this.context&&(this.renderSession.smoothProperty="oImageSmoothingEnabled")},i.CanvasRenderer.prototype.constructor=i.CanvasRenderer,i.CanvasRenderer.prototype.render=function(t){i.texturesToUpdate.length=0,i.texturesToDestroy.length=0,t.updateTransform(),this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,navigator.isCocoonJS&&this.view.screencanvas&&(this.context.fillStyle="black",this.context.clear()),!this.transparent&&this.clearBeforeRender?(this.context.fillStyle=t.backgroundColorString,this.context.fillRect(0,0,this.width,this.height)):this.transparent&&this.clearBeforeRender&&this.context.clearRect(0,0,this.width,this.height),this.renderDisplayObject(t),t.interactive&&(t._interactiveEventsAdded||(t._interactiveEventsAdded=!0,t.interactionManager.setTarget(this))),i.Texture.frameUpdates.length>0&&(i.Texture.frameUpdates.length=0)},i.CanvasRenderer.prototype.resize=function(t,e){this.width=t,this.height=e,this.view.width=t,this.view.height=e},i.CanvasRenderer.prototype.renderDisplayObject=function(t,e){this.renderSession.context=e||this.context,t._renderCanvas(this.renderSession)},i.CanvasRenderer.prototype.renderStripFlat=function(t){var e=this.context,r=t.verticies,i=r.length/2;this.count++,e.beginPath();for(var n=1;i-2>n;n++){var o=2*n,s=r[o],a=r[o+2],h=r[o+4],l=r[o+1],u=r[o+3],c=r[o+5];e.moveTo(s,l),e.lineTo(a,u),e.lineTo(h,c)}e.fillStyle="#FF0000",e.fill(),e.closePath()},i.CanvasRenderer.prototype.renderStrip=function(t){var e=this.context,r=t.verticies,i=t.uvs,n=r.length/2;this.count++;for(var o=1;n-2>o;o++){var s=2*o,a=r[s],h=r[s+2],l=r[s+4],u=r[s+1],c=r[s+3],d=r[s+5],f=i[s]*t.texture.width,p=i[s+2]*t.texture.width,g=i[s+4]*t.texture.width,v=i[s+1]*t.texture.height,m=i[s+3]*t.texture.height,x=i[s+5]*t.texture.height;e.save(),e.beginPath(),e.moveTo(a,u),e.lineTo(h,c),e.lineTo(l,d),e.closePath(),e.clip();var y=f*m+v*g+p*x-m*g-v*p-f*x,b=a*m+v*l+h*x-m*l-v*h-a*x,T=f*h+a*g+p*l-h*g-a*p-f*l,S=f*m*l+v*h*g+a*p*x-a*m*g-v*p*l-f*h*x,w=u*m+v*d+c*x-m*d-v*c-u*x,E=f*c+u*g+p*d-c*g-u*p-f*d,_=f*m*d+v*c*g+u*p*x-u*m*g-v*p*d-f*c*x;e.transform(b/y,w/y,T/y,E/y,S/y,_/y),e.drawImage(t.texture.baseTexture.source,0,0),e.restore()
}},
i.CanvasBuffer=function(t,e){
	this.width=t,
	this.height=e,
	this.canvas=document.createElement("canvas"),
	this.context=this.canvas.getContext("2d"),
	this.canvas.width=8000,
	//t,
	this.canvas.height=8000
	//e
},
i.CanvasBuffer.prototype.clear=function(){
	this.context.clearRect(0,0,this.width,this.height)
},
i.CanvasBuffer.prototype.resize=function(t,e){
	this.width=this.canvas.width=8000;
	//t,
	this.height=this.canvas.height=8000;
	//e
},
i.CanvasGraphics=function(){},i.CanvasGraphics.renderGraphics=function(t,e){
	for(var r=t.worldAlpha,n="",o=0;o<t.graphicsData.length;o++){
		var s=t.graphicsData[o],
		a=s.points;
		if(e.strokeStyle=n="#"+("00000"+(0|s.lineColor).toString(16)).substr(-6),
			e.lineWidth=s.lineWidth,
			s.type===i.Graphics.POLY){
			e.beginPath(),
		e.moveTo(a[0],a[1]);
		for(var h=1;h<a.length/2;h++)
			e.lineTo(a[2*h],a[2*h+1]);
		a[0]===a[a.length-2]&&a[1]===a[a.length-1]&&e.closePath(),
		s.fill&&(e.globalAlpha=s.fillAlpha*r,
			e.fillStyle=n="#"+("00000"+(0|s.fillColor).toString(16)).substr(-6),
			e.fill()),
		s.lineWidth&&(e.globalAlpha=s.lineAlpha*r,e.stroke())
	}
	else if(s.type===i.Graphics.RECT)
		(s.fillColor||0===s.fillColor)&&(e.globalAlpha=s.fillAlpha*r,e.fillStyle=n="#"+("00000"+(0|s.fillColor).toString(16)).substr(-6),
			e.fillRect(a[0],a[1],a[2],a[3])),
	s.lineWidth&&(e.globalAlpha=s.lineAlpha*r,
		e.strokeRect(a[0],a[1],a[2],a[3]));
	else if(s.type===i.Graphics.CIRC)
		e.beginPath(),
	e.arc(a[0],a[1],a[2],0,2*Math.PI),
	e.closePath(),
	s.fill&&(e.globalAlpha=s.fillAlpha*r,
		e.fillStyle=n="#"+("00000"+(0|s.fillColor).toString(16)).substr(-6),
		e.fill()),
	s.lineWidth&&(e.globalAlpha=s.lineAlpha*r,e.stroke());
	else if(s.type===i.Graphics.ELIP){
		var l=s.points,u=2*l[2],c=2*l[3],d=l[0]-u/2,f=l[1]-c/2;
		e.beginPath();
		var p=.5522848,
		g=u/2*p,
		v=c/2*p,
		m=d+u,
		x=f+c,
		y=d+u/2,
		b=f+c/2;
		e.moveTo(d,b),
		e.bezierCurveTo(d,b-v,y-g,f,y,f),
		e.bezierCurveTo(y+g,f,m,b-v,m,b),
		e.bezierCurveTo(m,b+v,y+g,x,y,x),
		e.bezierCurveTo(y-g,x,d,b+v,d,b),
		e.closePath(),
		s.fill&&(e.globalAlpha=s.fillAlpha*r,
			e.fillStyle=n="#"+("00000"+(0|s.fillColor).toString(16)).substr(-6),
			e.fill()),
		s.lineWidth&&(e.globalAlpha=s.lineAlpha*r,e.stroke())
	}
	else if(s.type===i.Graphics.RREC){
		var T=a[0],
		S=a[1],
		w=a[2],
		E=a[3],
		_=a[4],
		C=Math.min(w,E)/2|0;
		_=_>C?C:_,
		e.beginPath(),
		e.moveTo(T,S+_),
		e.lineTo(T,S+E-_),
		e.quadraticCurveTo(T,S+E,T+_,S+E),
		e.lineTo(T+w-_,S+E),
		e.quadraticCurveTo(T+w,S+E,T+w,S+E-_),
		e.lineTo(T+w,S+_),
		e.quadraticCurveTo(T+w,S,T+w-_,S),
		e.lineTo(T+_,S),
		e.quadraticCurveTo(T,S,T,S+_),
		e.closePath(),
		(s.fillColor||0===s.fillColor)&&(e.globalAlpha=s.fillAlpha*r,
			e.fillStyle=n="#"+("00000"+(0|s.fillColor).toString(16)).substr(-6),e.fill()),
		s.lineWidth&&(e.globalAlpha=s.lineAlpha*r,e.stroke())
	}
}
},
i.CanvasGraphics.renderGraphicsMask=function(t,e){
	var r=t.graphicsData.length;
	if(0!==r){
		r>1&&(r=1,window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
		for(var n=0;1>n;n++){
			var o=t.graphicsData[n],
			s=o.points;
			if(o.type===i.Graphics.POLY){
				e.beginPath(),
				e.moveTo(s[0],s[1]);
				for(var a=1;a<s.length/2;a++)
					e.lineTo(s[2*a],s[2*a+1]);
				s[0]===s[s.length-2]&&s[1]===s[s.length-1]&&e.closePath()
			}
			else if(o.type===i.Graphics.RECT)
				e.beginPath(),
			e.rect(s[0],s[1],s[2],s[3]),
			e.closePath();
			else if(o.type===i.Graphics.CIRC)
				e.beginPath(),
			e.arc(s[0],s[1],s[2],0,2*Math.PI),
			e.closePath();
			else if(o.type===i.Graphics.ELIP){
				var h=o.points,
				l=2*h[2],
				u=2*h[3],
				c=h[0]-l/2,
				d=h[1]-u/2;
				e.beginPath();
				var f=.5522848,
				p=l/2*f,
				g=u/2*f,
				v=c+l,
				m=d+u,
				x=c+l/2,
				y=d+u/2;
				e.moveTo(c,y),
				e.bezierCurveTo(c,y-g,x-p,d,x,d),
				e.bezierCurveTo(x+p,d,v,y-g,v,y),
				e.bezierCurveTo(v,y+g,x+p,m,x,m),
				e.bezierCurveTo(x-p,m,c,y+g,c,y),
				e.closePath()
			}
			else if(o.type===i.Graphics.RREC){
				var b=s[0],
				T=s[1],
				S=s[2],
				w=s[3],
				E=s[4],
				_=Math.min(S,w)/2|0;E=E>_?_:E,
				e.beginPath(),
				e.moveTo(b,T+E),
				e.lineTo(b,T+w-E),
				e.quadraticCurveTo(b,T+w,b+E,T+w),
				e.lineTo(b+S-E,T+w),
				e.quadraticCurveTo(b+S,T+w,b+S,T+w-E),
				e.lineTo(b+S,T+E),
				e.quadraticCurveTo(b+S,T,b+S-E,T),
				e.lineTo(b+E,T),
				e.quadraticCurveTo(b,T,b,T+E),
				e.closePath()
			}
		}
	}
},
i.Graphics=function(){
	i.DisplayObjectContainer.call(this),
	this.renderable=!0,
	this.fillAlpha=1,
	this.lineWidth=0,
	this.lineColor="black",
	this.graphicsData=[],
	this.tint=16777215,
	this.blendMode=i.blendModes.NORMAL,
	this.currentPath={points:[]},
	this._webGL=[],
	this.isMask=!1,
	this.bounds=null,
	this.boundsPadding=10,
	this.dirty=!0
},
i.Graphics.prototype=Object.create(i.DisplayObjectContainer.prototype),
i.Graphics.prototype.constructor=i.Graphics,Object.defineProperty(i.Graphics.prototype,"cacheAsBitmap",{
	get:function(){
		return this._cacheAsBitmap
	},
	set:function(t){
		this._cacheAsBitmap=t,this._cacheAsBitmap?this._generateCachedSprite():(this.destroyCachedSprite(),this.dirty=!0)
	}
}),
i.Graphics.prototype.lineStyle=function(t,e,r){
	return this.currentPath.points.length||this.graphicsData.pop(),
	this.lineWidth=t||0,
	this.lineColor=e||0,
	this.lineAlpha=arguments.length<3?1:r,
	this.currentPath={
		lineWidth:this.lineWidth,
		lineColor:this.lineColor,
		lineAlpha:this.lineAlpha,
		fillColor:this.fillColor,
		fillAlpha:this.fillAlpha,
		fill:this.filling,
		points:[],
		type:i.Graphics.POLY
	},
	this.graphicsData.push(this.currentPath),
	this
},
i.Graphics.prototype.moveTo=function(t,e){
	return this.currentPath.points.length||this.graphicsData.pop(),
	this.currentPath=this.currentPath={
		lineWidth:this.lineWidth,
		lineColor:this.lineColor,
		lineAlpha:this.lineAlpha,
		fillColor:this.fillColor,
		fillAlpha:this.fillAlpha,
		fill:this.filling,
		points:[],
		type:i.Graphics.POLY
	},
	this.currentPath.points.push(t,e),
	this.graphicsData.push(this.currentPath)
	,this
},
i.Graphics.prototype.lineTo=function(t,e){
	return this.currentPath.points.push(t,e),
	this.dirty=!0,
	this
},
i.Graphics.prototype.quadraticCurveTo=function(t,e,r,i){
	0===this.currentPath.points.length&&this.moveTo(0,0);
	var n,o,s=20,
	a=this.currentPath.points;
	0===a.length&&this.moveTo(0,0);
	for(var h=a[a.length-2],l=a[a.length-1],u=0,c=1;s>=c;c++)
		u=c/s,
	n=h+(t-h)*u,
	o=l+(e-l)*u,
	a.push(n+(t+(r-t)*u-n)*u,
		o+(e+(i-e)*u-o)*u);
	return this.dirty=!0,
	this
},
i.Graphics.prototype.bezierCurveTo=function(t,e,r,i,n,o){
	0===this.currentPath.points.length&&this.moveTo(0,0);
	for(var s,a,h,l,u,c=20,d=this.currentPath.points,f=d[d.length-2],p=d[d.length-1],g=0,v=1;c>v;v++)
		g=v/c,
	s=1-g,
	a=s*s,
	h=a*s,
	l=g*g,
	u=l*g,
	d.push(h*f+3*a*g*t+3*s*l*r+u*n,h*p+3*a*g*e+3*s*l*i+u*o);
	return this.dirty=!0,
	this
},
i.Graphics.prototype.arcTo=function(t,e,r,i,n){
	0===this.currentPath.points.length&&this.moveTo(t,e);
	var o=this.currentPath.points,
	s=o[o.length-2],
	a=o[o.length-1],
	h=a-e,
	l=s-t,
	u=i-e,
	c=r-t,
	d=Math.abs(h*c-l*u);
	if(1e-8>d||0===n)
		o.push(t,e);
	else{
		var f=h*h+l*l,
		p=u*u+c*c,
		g=h*u+l*c,
		v=n*Math.sqrt(f)/d,
		m=n*Math.sqrt(p)/d,
		x=v*g/f,
		y=m*g/p,
		b=v*c+m*l,
		T=v*u+m*h,
		S=l*(m+x),
		w=h*(m+x),
		E=c*(v+y),
		_=u*(v+y),
		C=Math.atan2(w-T,S-b),
		A=Math.atan2(_-T,E-b);
		this.arc(b+t,T+e,n,C,A,l*u>c*h)
	}
	return this.dirty=!0,
	this
},
i.Graphics.prototype.arc=function(t,e,r,i,n,o){
	var s=t+Math.cos(i)*r,
	a=e+Math.sin(i)*r,
	h=this.currentPath.points;
	if((0!==h.length&&h[h.length-2]!==s||h[h.length-1]!==a)&&(this.moveTo(s,a),
		h=this.currentPath.points),i===n)
		return this;
	!o&&i>=n?n+=2*Math.PI:o&&n>=i&&(i+=2*Math.PI);
	var l=o?-1*(i-n):n-i,
	u=Math.abs(l)/(2*Math.PI)*40;
	if(0===l)
		return this;
	for(var c=l/(2*u),d=2*c,f=Math.cos(c),p=Math.sin(c),g=u-1,v=g%1/g,m=0;g>=m;m++){
		var x=m+v*m,
		y=c+i+d*x,
		b=Math.cos(y),
		T=-Math.sin(y);
		h.push((f*b+p*T)*r+t,(f*-T+p*b)*r+e)
	}
	return this.dirty=!0,
	this
},
i.Graphics.prototype.drawPath=function(t){
	return this.currentPath.points.length||this.graphicsData.pop(),
	this.currentPath=this.currentPath={
		lineWidth:this.lineWidth,
		lineColor:this.lineColor,
		lineAlpha:this.lineAlpha,
		fillColor:this.fillColor,
		fillAlpha:this.fillAlpha,
		fill:this.filling,
		points:[],
		type:i.Graphics.POLY
	},
	this.graphicsData.push(this.currentPath),
	this.currentPath.points=this.currentPath.points.concat(t),
	this.dirty=!0,this
},
i.Graphics.prototype.beginFill=function(t,e){
	return this.filling=!0,
	this.fillColor=t||0,
	this.fillAlpha=arguments.length<2?1:e,
	this
},
i.Graphics.prototype.endFill=function(){
	return this.filling=!1,
	this.fillColor=null,
	this.fillAlpha=1,
	this
},
i.Graphics.prototype.drawRect=function(t,e,r,n){
	return this.currentPath.points.length||this.graphicsData.pop(),
	this.currentPath={
		lineWidth:this.lineWidth,
		lineColor:this.lineColor,
		lineAlpha:this.lineAlpha,
		fillColor:this.fillColor,
		fillAlpha:this.fillAlpha,
		fill:this.filling,
		points:[t,e,r,n],
		type:i.Graphics.RECT
	},
	this.graphicsData.push(this.currentPath),
	this.dirty=!0,
	this
},
i.Graphics.prototype.drawRoundedRect=function(t,e,r,n,o){
	return this.currentPath.points.length||this.graphicsData.pop(),
	this.currentPath={
		lineWidth:this.lineWidth,
		lineColor:this.lineColor,
		lineAlpha:this.lineAlpha,
		fillColor:this.fillColor,
		fillAlpha:this.fillAlpha,
		fill:this.filling,
		points:[t,e,r,n,o],
		type:i.Graphics.RREC
	},
	this.graphicsData.push(this.currentPath),
	this.dirty=!0,
	this
},
i.Graphics.prototype.drawCircle=function(t,e,r){
	return this.currentPath.points.length||this.graphicsData.pop(),
	this.currentPath={
		lineWidth:this.lineWidth,
		lineColor:this.lineColor,
		lineAlpha:this.lineAlpha,
		fillColor:this.fillColor,
		fillAlpha:this.fillAlpha,
		fill:this.filling,
		points:[t,e,r,r],
		type:i.Graphics.CIRC
	},
	this.graphicsData.push(this.currentPath),
	this.dirty=!0,
	this
},
i.Graphics.prototype.drawEllipse=function(t,e,r,n){
	return this.currentPath.points.length||this.graphicsData.pop(),
	this.currentPath={
		lineWidth:this.lineWidth,
		lineColor:this.lineColor,
		lineAlpha:this.lineAlpha,
		fillColor:this.fillColor,
		fillAlpha:this.fillAlpha,
		fill:this.filling,
		points:[t,e,r,n],
		type:i.Graphics.ELIP
	},
	this.graphicsData.push(this.currentPath),
	this.dirty=!0,
	this
},
i.Graphics.prototype.clear=function(){
	return this.lineWidth=0,
	this.filling=!1,
	this.dirty=!0,
	this.clearDirty=!0,
	this.graphicsData=[],
	this.bounds=null,
	this
},
i.Graphics.prototype.generateTexture=function(){
	var t=this.getBounds(),
	e=new i.CanvasBuffer(t.width,t.height),
	r=i.Texture.fromCanvas(e.canvas);
	return e.context.translate(-t.x,-t.y),
	i.CanvasGraphics.renderGraphics(this,e.context),r
},
i.Graphics.prototype._renderWebGL=function(t){
	if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){
		if(this._cacheAsBitmap)
			return this.dirty&&(this._generateCachedSprite(),i.updateWebGLTexture(this._cachedSprite.texture.baseTexture,t.gl),
				this.dirty=!1),
		this._cachedSprite.alpha=this.alpha,
		void i.Sprite.prototype._renderWebGL.call(this._cachedSprite,t);
		if(t.spriteBatch.stop(),t.blendModeManager.setBlendMode(this.blendMode),this._mask&&t.maskManager.pushMask(this._mask,t),this._filters&&t.filterManager.pushFilter(this._filterBlock),this.blendMode!==t.spriteBatch.currentBlendMode){t.spriteBatch.currentBlendMode=this.blendMode;var e=i.blendModesWebGL[t.spriteBatch.currentBlendMode];t.spriteBatch.gl.blendFunc(e[0],e[1])}if(i.WebGLGraphics.renderGraphics(this,t),this.children.length){t.spriteBatch.start();for(var r=0,n=this.children.length;n>r;r++)this.children[r]._renderWebGL(t);t.spriteBatch.stop()}this._filters&&t.filterManager.popFilter(),this._mask&&t.maskManager.popMask(this.mask,t),t.drawCount++,t.spriteBatch.start()}},i.Graphics.prototype._renderCanvas=function(t){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){var e=t.context,r=this.worldTransform;this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,e.globalCompositeOperation=i.blendModesCanvas[t.currentBlendMode]),this._mask&&t.maskManager.pushMask(this._mask,t.context),e.setTransform(r.a,r.c,r.b,r.d,r.tx,r.ty),i.CanvasGraphics.renderGraphics(this,e);for(var n=0,o=this.children.length;o>n;n++)this.children[n]._renderCanvas(t);this._mask&&t.maskManager.popMask(t.context)}},
i.Graphics.prototype.getBounds=function(t){
	this.bounds||this.updateBounds();
	var e=this.bounds.x,
	r=this.bounds.width+this.bounds.x,
	i=this.bounds.y,
	n=this.bounds.height+this.bounds.y,
	o=t||this.worldTransform,
	s=o.a,
	a=o.c,
	h=o.b,
	l=o.d,
	u=o.tx,
	c=o.ty,
	d=s*r+h*n+u,
	f=l*n+a*r+c,
	p=s*e+h*n+u,
	g=l*n+a*e+c,
	v=s*e+h*i+u,
	m=l*i+a*e+c,
	x=s*r+h*i+u,
	y=l*i+a*r+c,
	b=d,
	T=f,
	S=d,
	w=f;
	S=S>p?p:S,S=S>v?v:S,S=S>x?x:S,w=w>g?g:w,w=w>m?m:w,w=w>y?y:w,b=p>b?p:b,b=v>b?v:b,b=x>b?x:b,T=g>T?g:T,T=m>T?m:T,T=y>T?y:T;
	var E=this._bounds;
	return E.x=S,
	E.width=b-S,
	E.y=w,
	E.height=T-w,
	E
},
i.Graphics.prototype.updateBounds=function(){
	for(var t,e,r,n,o,s=1/0,a=-1/0,h=1/0,l=-1/0,u=0;u<this.graphicsData.length;u++){
		var c=this.graphicsData[u],
		d=c.type,
		f=c.lineWidth;
		if(t=c.points,d===i.Graphics.RECT)
			e=t[0]-f/2,
		r=t[1]-f/2,
		n=t[2]+f,
		o=t[3]+f,
		s=s>e?e:s,
		a=e+n>a?e+n:a,
		h=h>r?e:h,
		l=r+o>l?r+o:l;
		else if(d===i.Graphics.CIRC||d===i.Graphics.ELIP)
			e=t[0],
		r=t[1],
		n=t[2]+f/2,
		o=t[3]+f/2,
		s=s>e-n?e-n:s,
		a=e+n>a?e+n:a,
		h=h>r-o?r-o:h,
		l=r+o>l?r+o:l;
		else for(var p=0;p<t.length;p+=2)
		e=t[p],
		r=t[p+1],
		s=s>e-f?e-f:s,
		a=e+f>a?e+f:a,
		h=h>r-f?r-f:h,
		l=r+f>l?r+f:l
	}
	var g=this.boundsPadding;
	this.bounds=new i.Rectangle(s-g,h-g,a-s+2*g,l-h+2*g)
},
i.Graphics.prototype._generateCachedSprite=function(){
	var t=this.getLocalBounds();
	if(this._cachedSprite)
		this._cachedSprite.buffer.resize(t.width,t.height);
	else{
		var e=new i.CanvasBuffer(t.width,t.height),
		r=i.Texture.fromCanvas(e.canvas);
		this._cachedSprite=new i.Sprite(r),
		this._cachedSprite.buffer=e,
		this._cachedSprite.worldTransform=this.worldTransform
	}
	this._cachedSprite.anchor.x=-(t.x/t.width),
	this._cachedSprite.anchor.y=-(t.y/t.height),
	this._cachedSprite.buffer.context.translate(-t.x,-t.y),
	i.CanvasGraphics.renderGraphics(this,this._cachedSprite.buffer.context),
	this._cachedSprite.alpha=this.alpha
},
i.Graphics.prototype.destroyCachedSprite=function(){
	this._cachedSprite.texture.destroy(!0),
	this._cachedSprite=null
},
i.Graphics.POLY=0,
i.Graphics.RECT=1,
i.Graphics.CIRC=2,
i.Graphics.ELIP=3,
i.Graphics.RREC=4,
i.Strip=function(t){
	i.DisplayObjectContainer.call(this),
	this.texture=t,
	this.uvs=new i.Float32Array([0,1,1,1,1,0,0,1]),
	this.verticies=new i.Float32Array([0,0,100,0,100,100,0,100]),
	this.colors=new i.Float32Array([1,1,1,1]),
	this.indices=new i.Uint16Array([0,1,2,3]),
	this.dirty=!0
},
i.Strip.prototype=Object.create(i.DisplayObjectContainer.prototype),
i.Strip.prototype.constructor=i.Strip,
i.Strip.prototype._renderWebGL=function(t){
	!this.visible||this.alpha<=0||(t.spriteBatch.stop(),
		this._vertexBuffer||this._initWebGL(t),
		t.shaderManager.setShader(t.shaderManager.stripShader),
		this._renderStrip(t),
		t.spriteBatch.start())
},
i.Strip.prototype._initWebGL=function(t){
	var e=t.gl;
	this._vertexBuffer=e.createBuffer(),
	this._indexBuffer=e.createBuffer(),
	this._uvBuffer=e.createBuffer(),
	this._colorBuffer=e.createBuffer(),
	e.bindBuffer(e.ARRAY_BUFFER,this._vertexBuffer),
	e.bufferData(e.ARRAY_BUFFER,this.verticies,e.DYNAMIC_DRAW),
	e.bindBuffer(e.ARRAY_BUFFER,this._uvBuffer),
	e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW),
	e.bindBuffer(e.ARRAY_BUFFER,this._colorBuffer),
	e.bufferData(e.ARRAY_BUFFER,this.colors,e.STATIC_DRAW),
	e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this._indexBuffer),
	e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW)
},
i.Strip.prototype._renderStrip=function(t){
	var e=t.gl,
	r=t.projection,
	n=t.offset,
	o=t.shaderManager.stripShader;
	e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),
	e.uniformMatrix3fv(o.translationMatrix,
		!1,
		this.worldTransform.toArray(!0)),
	e.uniform2f(o.projectionVector,r.x,-r.y),
	e.uniform2f(o.offsetVector,-n.x,-n.y),
	e.uniform1f(o.alpha,1),
	this.dirty?(this.dirty=!1,
		e.bindBuffer(e.ARRAY_BUFFER,this._vertexBuffer),
		e.bufferData(e.ARRAY_BUFFER,this.verticies,e.STATIC_DRAW),
		e.vertexAttribPointer(o.aVertexPosition,2,e.FLOAT,!1,0,0),
		e.bindBuffer(e.ARRAY_BUFFER,this._uvBuffer),
		e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW),
		e.vertexAttribPointer(o.aTextureCoord,2,e.FLOAT,!1,0,0),
		e.activeTexture(e.TEXTURE0),
		e.bindTexture(e.TEXTURE_2D,this.texture.baseTexture._glTextures[e.id]||i.createWebGLTexture(this.texture.baseTexture,e)),
		e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this._indexBuffer),
		e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW)):(e.bindBuffer(e.ARRAY_BUFFER,this._vertexBuffer),
		e.bufferSubData(e.ARRAY_BUFFER,0,this.verticies),
		e.vertexAttribPointer(o.aVertexPosition,2,e.FLOAT,!1,0,0),
		e.bindBuffer(e.ARRAY_BUFFER,this._uvBuffer),
		e.vertexAttribPointer(o.aTextureCoord,2,e.FLOAT,!1,0,0),
		e.activeTexture(e.TEXTURE0),
		e.bindTexture(e.TEXTURE_2D,
		this.texture.baseTexture._glTextures[e.id]||i.createWebGLTexture(this.texture.baseTexture,e)),
	e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this._indexBuffer)),
	e.drawElements(e.TRIANGLE_STRIP,this.indices.length,e.UNSIGNED_SHORT,0)
},
i.Strip.prototype._renderCanvas=function(t){
	var e=t.context,
	r=this.worldTransform;
	t.roundPixels?e.setTransform(r.a,r.c,r.b,r.d,0|r.tx,0|r.ty):e.setTransform(r.a,r.c,r.b,r.d,r.tx,r.ty);
	var i=this,
	n=i.verticies,
	o=i.uvs,
	s=n.length/2;
	this.count++;
	for(var a=0;s-2>a;a++){
		var h=2*a,
		l=n[h],
		u=n[h+2],
		c=n[h+4],
		d=n[h+1],
		f=n[h+3],
		p=n[h+5],
		g=(l+u+c)/3,
		v=(d+f+p)/3,
		m=l-g,x=d-v,
		y=Math.sqrt(m*m+x*x);
		l=g+m/y*(y+3),
		d=v+x/y*(y+3),
		m=u-g,x=f-v,
		y=Math.sqrt(m*m+x*x),
		u=g+m/y*(y+3),
		f=v+x/y*(y+3),
		m=c-g,
		x=p-v,
		y=Math.sqrt(m*m+x*x),
		c=g+m/y*(y+3),
		p=v+x/y*(y+3);
		var b=o[h]*i.texture.width,
		T=o[h+2]*i.texture.width,
		S=o[h+4]*i.texture.width,
		w=o[h+1]*i.texture.height,
		E=o[h+3]*i.texture.height,
		_=o[h+5]*i.texture.height;
		e.save(),
		e.beginPath(),
		e.moveTo(l,d),
		e.lineTo(u,f),
		e.lineTo(c,p),
		e.closePath(),
		e.clip();
		var C=b*E+w*S+T*_-E*S-w*T-b*_,
		A=l*E+w*c+u*_-E*c-w*u-l*_,
		R=b*u+l*S+T*c-u*S-l*T-b*c,
		M=b*E*c+w*u*S+l*T*_-l*E*S-w*T*c-b*u*_,
		L=d*E+w*p+f*_-E*p-w*f-d*_,
		F=b*f+d*S+T*p-f*S-d*T-b*p,
		I=b*E*p+w*f*S+d*T*_-d*E*S-w*T*p-b*f*_;
		e.transform(A/C,L/C,R/C,F/C,M/C,I/C),
		e.drawImage(i.texture.baseTexture.source,0,0),
		e.restore()
	}
},
i.Strip.prototype.onTextureUpdate=function(){
	this.updateFrame=!0
},
i.Rope=function(t,e){
	i.Strip.call(this,t),
	this.points=e,
	this.verticies=new i.Float32Array(4*e.length),
	this.uvs=new i.Float32Array(4*e.length),
	this.colors=new i.Float32Array(2*e.length),
	this.indices=new i.Uint16Array(2*e.length),
	this.refresh()
},
i.Rope.prototype=Object.create(i.Strip.prototype),
i.Rope.prototype.constructor=i.Rope,
i.Rope.prototype.refresh=function(){
	var t=this.points;
	if(!(t.length<1)){
		var e=this.uvs,
		r=t[0],
		i=this.indices,
		n=this.colors;
		this.count-=.2,
		e[0]=0,
		e[1]=0,
		e[2]=0,
		e[3]=1,
		n[0]=1,
		n[1]=1,
		i[0]=0,
		i[1]=1;
		for(var o,s,a,h=t.length,l=1;h>l;l++)
			o=t[l],
		s=4*l,
		a=l/(h-1),
		l%2?(e[s]=a,e[s+1]=0,e[s+2]=a,e[s+3]=1):(e[s]=a,e[s+1]=0,e[s+2]=a,e[s+3]=1),s=2*l,n[s]=1,n[s+1]=1,s=2*l,i[s]=s,i[s+1]=s+1,r=o
	}
},
i.Rope.prototype.updateTransform=function(){
	var t=this.points;
	if(!(t.length<1)){
		var e,
		r=t[0],
		n={x:0,y:0};
		this.count-=.2;
		for(var o,s,a,h,l,u=this.verticies,c=t.length,d=0;c>d;d++)
			o=t[d],
		s=4*d,
		e=d<t.length-1?t[d+1]:o,
		n.y=-(e.x-r.x),
		n.x=e.y-r.y,
		a=10*(1-d/(c-1)),
		a>1&&(a=1),
		h=Math.sqrt(n.x*n.x+n.y*n.y),
		l=this.texture.height/2,
		n.x/=h,
		n.y/=h,
		n.x*=l,
		n.y*=l,
		u[s]=o.x+n.x,
		u[s+1]=o.y+n.y,
		u[s+2]=o.x-n.x,
		u[s+3]=o.y-n.y,
		r=o;i.DisplayObjectContainer.prototype.updateTransform.call(this)
	}
},
i.Rope.prototype.setTexture=function(t){
	this.texture=t
},
i.TilingSprite=function(t,e,r){
	i.Sprite.call(this,t),
	this._width=e||100,
	this._height=r||100,
	this.tileScale=new i.Point(1,1),
	this.tileScaleOffset=new i.Point(1,1),
	this.tilePosition=new i.Point(0,0),
	this.renderable=!0,
	this.tint=16777215,
	this.blendMode=i.blendModes.NORMAL
},
i.TilingSprite.prototype=Object.create(i.Sprite.prototype),
i.TilingSprite.prototype.constructor=i.TilingSprite,
Object.defineProperty(i.TilingSprite.prototype,"width",{
	get:function(){
		return this._width
	},
	set:function(t){
		this._width=t
	}
}),
Object.defineProperty(i.TilingSprite.prototype,"height",{
	get:function(){
		return this._height
	},
	set:function(t){
		this._height=t
	}
}),
i.TilingSprite.prototype.setTexture=function(t){
	this.texture!==t&&(this.texture=t,
		this.refreshTexture=!0,
		this.cachedTint=16777215)
},
i.TilingSprite.prototype._renderWebGL=function(t){
	if(this.visible!==!1&&0!==this.alpha){
		var e,r;
		for(this._mask&&(t.spriteBatch.stop(),t.maskManager.pushMask(this.mask,t),
			t.spriteBatch.start()),
			this._filters&&(t.spriteBatch.flush(),t.filterManager.pushFilter(this._filterBlock)),
			!this.tilingTexture||this.refreshTexture?(this.generateTilingTexture(!0),
				this.tilingTexture&&this.tilingTexture.needsUpdate&&(i.updateWebGLTexture(this.tilingTexture.baseTexture,t.gl),
					this.tilingTexture.needsUpdate=!1)):t.spriteBatch.renderTilingSprite(this),
			e=0,r=this.children.length;r>e;e++)
			this.children[e]._renderWebGL(t);
			t.spriteBatch.stop(),this._filters&&t.filterManager.popFilter(),this._mask&&t.maskManager.popMask(t),t.spriteBatch.start()
		}
},
i.TilingSprite.prototype._renderCanvas=function(t){
	if(this.visible!==!1&&0!==this.alpha){
		var e=t.context;
		this._mask&&t.maskManager.pushMask(this._mask,e),
		e.globalAlpha=this.worldAlpha;
		var r,n,o=this.worldTransform;
		if(e.setTransform(o.a,o.c,o.b,o.d,o.tx,o.ty),
			!this.__tilePattern||this.refreshTexture){
			if(this.generateTilingTexture(!1),!this.tilingTexture)
				return;
			this.__tilePattern=e.createPattern(this.tilingTexture.baseTexture.source,"repeat")
		}
		this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,e.globalCompositeOperation=i.blendModesCanvas[t.currentBlendMode]);
		var s=this.tilePosition,
		a=this.tileScale;
		for(s.x%=this.tilingTexture.baseTexture.width,
			s.y%=this.tilingTexture.baseTexture.height,
			e.scale(a.x,a.y),
			e.translate(s.x,s.y),
			e.fillStyle=this.__tilePattern,
			e.fillRect(-s.x+this.anchor.x*-this._width,-s.y+this.anchor.y*-this._height,this._width/a.x,this._height/a.y),
			e.scale(1/a.x,1/a.y),
			e.translate(-s.x,-s.y),
			this._mask&&t.maskManager.popMask(t.context),
			r=0,
			n=this.children.length;n>r;r++)
			this.children[r]._renderCanvas(t)
	}
},
i.TilingSprite.prototype.getBounds=function(){
	var t=this._width,
	e=this._height,
	r=t*(1-this.anchor.x),
	i=t*-this.anchor.x,
	n=e*(1-this.anchor.y),
	o=e*-this.anchor.y,
	s=this.worldTransform,
	a=s.a,
	h=s.c,
	l=s.b,
	u=s.d,
	c=s.tx,
	d=s.ty,
	f=a*i+l*o+c,
	p=u*o+h*i+d,
	g=a*r+l*o+c,
	v=u*o+h*r+d,
	m=a*r+l*n+c,
	x=u*n+h*r+d,
	y=a*i+l*n+c,
	b=u*n+h*i+d,
	T=-1/0,
	S=-1/0,
	w=1/0,
	E=1/0;
	w=w>f?f:w,w=w>g?g:w,w=w>m?m:w,w=w>y?y:w,E=E>p?p:E,E=E>v?v:E,E=E>x?x:E,E=E>b?b:E,T=f>T?f:T,T=g>T?g:T,T=m>T?m:T,T=y>T?y:T,S=p>S?p:S,S=v>S?v:S,S=x>S?x:S,S=b>S?b:S;
	var _=this._bounds;
	return _.x=w,_.width=T-w,_.y=E,_.height=S-E,this._currentBounds=_,_
},
i.TilingSprite.prototype.onTextureUpdate=function(){

},
i.TilingSprite.prototype.generateTilingTexture=function(t){
	if(this.texture.baseTexture.hasLoaded){


		var e,r,n=this.texture,o=n.frame,s=o.width!==n.baseTexture.width||o.height!==n.baseTexture.height,a=!1;if(t?(e=i.getNextPowerOfTwo(o.width),r=i.getNextPowerOfTwo(o.height),(o.width!==e||o.height!==r)&&(a=!0)):s&&(e=o.width,r=o.height,a=!0),a){var h;this.tilingTexture&&this.tilingTexture.isTiling?(h=this.tilingTexture.canvasBuffer,h.resize(e,r),this.tilingTexture.baseTexture.width=e,this.tilingTexture.baseTexture.height=r,this.tilingTexture.needsUpdate=!0):(h=new i.CanvasBuffer(e,r),this.tilingTexture=i.Texture.fromCanvas(h.canvas),this.tilingTexture.canvasBuffer=h,this.tilingTexture.isTiling=!0),h.context.drawImage(n.baseTexture.source,n.crop.x,n.crop.y,n.crop.width,n.crop.height,0,0,e,r),this.tileScaleOffset.x=o.width/e,this.tileScaleOffset.y=o.height/r}else this.tilingTexture&&this.tilingTexture.isTiling&&this.tilingTexture.destroy(!0),this.tileScaleOffset.x=1,this.tileScaleOffset.y=1,this.tilingTexture=n;this.refreshTexture=!1,this.tilingTexture.baseTexture._powerOf2=!0}};var a={};a.BoneData=function(t,e){this.name=t,this.parent=e},a.BoneData.prototype={length:0,x:0,y:0,rotation:0,scaleX:1,scaleY:1},a.SlotData=function(t,e){this.name=t,this.boneData=e},a.SlotData.prototype={r:1,g:1,b:1,a:1,attachmentName:null},a.Bone=function(t,e){this.data=t,this.parent=e,this.setToSetupPose()},a.Bone.yDown=!1,a.Bone.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,m00:0,m01:0,worldX:0,m10:0,m11:0,worldY:0,worldRotation:0,worldScaleX:1,worldScaleY:1,updateWorldTransform:function(t,e){var r=this.parent;null!=r?(this.worldX=this.x*r.m00+this.y*r.m01+r.worldX,this.worldY=this.x*r.m10+this.y*r.m11+r.worldY,this.worldScaleX=r.worldScaleX*this.scaleX,this.worldScaleY=r.worldScaleY*this.scaleY,this.worldRotation=r.worldRotation+this.rotation):(this.worldX=this.x,this.worldY=this.y,this.worldScaleX=this.scaleX,this.worldScaleY=this.scaleY,this.worldRotation=this.rotation);var i=this.worldRotation*Math.PI/180,n=Math.cos(i),o=Math.sin(i);this.m00=n*this.worldScaleX,this.m10=o*this.worldScaleX,this.m01=-o*this.worldScaleY,this.m11=n*this.worldScaleY,t&&(this.m00=-this.m00,this.m01=-this.m01),e&&(this.m10=-this.m10,this.m11=-this.m11),a.Bone.yDown&&(this.m10=-this.m10,this.m11=-this.m11)},setToSetupPose:function(){var t=this.data;this.x=t.x,this.y=t.y,this.rotation=t.rotation,this.scaleX=t.scaleX,this.scaleY=t.scaleY}},a.Slot=function(t,e,r){this.data=t,this.skeleton=e,this.bone=r,this.setToSetupPose()},a.Slot.prototype={r:1,g:1,b:1,a:1,_attachmentTime:0,attachment:null,setAttachment:function(t){this.attachment=t,this._attachmentTime=this.skeleton.time},setAttachmentTime:function(t){this._attachmentTime=this.skeleton.time-t},getAttachmentTime:function(){return this.skeleton.time-this._attachmentTime},setToSetupPose:function(){var t=this.data;this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a;for(var e=this.skeleton.data.slots,r=0,i=e.length;i>r;r++)if(e[r]==t){this.setAttachment(t.attachmentName?this.skeleton.getAttachmentBySlotIndex(r,t.attachmentName):null);break}}},a.Skin=function(t){this.name=t,this.attachments={}},a.Skin.prototype={addAttachment:function(t,e,r){this.attachments[t+":"+e]=r},getAttachment:function(t,e){return this.attachments[t+":"+e]},_attachAll:function(t,e){for(var r in e.attachments){var i=r.indexOf(":"),n=parseInt(r.substring(0,i),10),o=r.substring(i+1),s=t.slots[n];if(s.attachment&&s.attachment.name==o){var a=this.getAttachment(n,o);a&&s.setAttachment(a)}}}},a.Animation=function(t,e,r){this.name=t,this.timelines=e,this.duration=r},a.Animation.prototype={apply:function(t,e,r){r&&this.duration&&(e%=this.duration);for(var i=this.timelines,n=0,o=i.length;o>n;n++)i[n].apply(t,e,1)},mix:function(t,e,r,i){r&&this.duration&&(e%=this.duration);for(var n=this.timelines,o=0,s=n.length;s>o;o++)n[o].apply(t,e,i)}},a.binarySearch=function(t,e,r){var i=0,n=Math.floor(t.length/r)-2;if(!n)return r;for(var o=n>>>1;;){if(t[(o+1)*r]<=e?i=o+1:n=o,i==n)return(i+1)*r;o=i+n>>>1}},a.linearSearch=function(t,e,r){for(var i=0,n=t.length-r;n>=i;i+=r)if(t[i]>e)return i;return-1},a.Curves=function(t){this.curves=[],this.curves.length=6*(t-1)},a.Curves.prototype={setLinear:function(t){this.curves[6*t]=0},setStepped:function(t){this.curves[6*t]=-1},setCurve:function(t,e,r,i,n){var o=.1,s=o*o,a=s*o,h=3*o,l=3*s,u=6*s,c=6*a,d=2*-e+i,f=2*-r+n,p=3*(e-i)+1,g=3*(r-n)+1,v=6*t,m=this.curves;m[v]=e*h+d*l+p*a,m[v+1]=r*h+f*l+g*a,m[v+2]=d*u+p*c,m[v+3]=f*u+g*c,m[v+4]=p*c,m[v+5]=g*c},getCurvePercent:function(t,e){e=0>e?0:e>1?1:e;var r=6*t,i=this.curves,n=i[r];if(!n)return e;if(-1==n)return 0;for(var o=i[r+1],s=i[r+2],a=i[r+3],h=i[r+4],l=i[r+5],u=n,c=o,d=8;;){if(u>=e){var f=u-n,p=c-o;return p+(c-p)*(e-f)/(u-f)}if(!d)break;d--,n+=s,o+=a,s+=h,a+=l,u+=n,c+=o}return c+(1-c)*(e-u)/(1-u)}},a.RotateTimeline=function(t){this.curves=new a.Curves(t),this.frames=[],this.frames.length=2*t},a.RotateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2},setFrame:function(t,e,r){t*=2,this.frames[t]=e,this.frames[t+1]=r},apply:function(t,e,r){var i,n=this.frames;if(!(e<n[0])){var o=t.bones[this.boneIndex];if(e>=n[n.length-2]){for(i=o.data.rotation+n[n.length-1]-o.rotation;i>180;)i-=360;for(;-180>i;)i+=360;return void(o.rotation+=i*r)}var s=a.binarySearch(n,e,2),h=n[s-1],l=n[s],u=1-(e-l)/(n[s-2]-l);for(u=this.curves.getCurvePercent(s/2-1,u),i=n[s+1]-h;i>180;)i-=360;for(;-180>i;)i+=360;for(i=o.data.rotation+(h+i*u)-o.rotation;i>180;)i-=360;for(;-180>i;)i+=360;o.rotation+=i*r}}},a.TranslateTimeline=function(t){this.curves=new a.Curves(t),this.frames=[],this.frames.length=3*t},a.TranslateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(t,e,r,i){t*=3,this.frames[t]=e,this.frames[t+1]=r,this.frames[t+2]=i},apply:function(t,e,r){var i=this.frames;if(!(e<i[0])){var n=t.bones[this.boneIndex];if(e>=i[i.length-3])return n.x+=(n.data.x+i[i.length-2]-n.x)*r,void(n.y+=(n.data.y+i[i.length-1]-n.y)*r);var o=a.binarySearch(i,e,3),s=i[o-2],h=i[o-1],l=i[o],u=1-(e-l)/(i[o+-3]-l);u=this.curves.getCurvePercent(o/3-1,u),n.x+=(n.data.x+s+(i[o+1]-s)*u-n.x)*r,n.y+=(n.data.y+h+(i[o+2]-h)*u-n.y)*r}}},a.ScaleTimeline=function(t){this.curves=new a.Curves(t),this.frames=[],this.frames.length=3*t},a.ScaleTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3},setFrame:function(t,e,r,i){t*=3,this.frames[t]=e,this.frames[t+1]=r,this.frames[t+2]=i},apply:function(t,e,r){var i=this.frames;if(!(e<i[0])){var n=t.bones[this.boneIndex];if(e>=i[i.length-3])return n.scaleX+=(n.data.scaleX-1+i[i.length-2]-n.scaleX)*r,void(n.scaleY+=(n.data.scaleY-1+i[i.length-1]-n.scaleY)*r);var o=a.binarySearch(i,e,3),s=i[o-2],h=i[o-1],l=i[o],u=1-(e-l)/(i[o+-3]-l);u=this.curves.getCurvePercent(o/3-1,u),n.scaleX+=(n.data.scaleX-1+s+(i[o+1]-s)*u-n.scaleX)*r,n.scaleY+=(n.data.scaleY-1+h+(i[o+2]-h)*u-n.scaleY)*r}}},a.ColorTimeline=function(t){this.curves=new a.Curves(t),this.frames=[],this.frames.length=5*t},a.ColorTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length/5},setFrame:function(t,e,r,i,n,o){t*=5,this.frames[t]=e,this.frames[t+1]=r,this.frames[t+2]=i,this.frames[t+3]=n,this.frames[t+4]=o},apply:function(t,e,r){var i=this.frames;if(!(e<i[0])){var n=t.slots[this.slotIndex];if(e>=i[i.length-5]){var o=i.length-1;return n.r=i[o-3],n.g=i[o-2],n.b=i[o-1],void(n.a=i[o])}var s=a.binarySearch(i,e,5),h=i[s-4],l=i[s-3],u=i[s-2],c=i[s-1],d=i[s],f=1-(e-d)/(i[s-5]-d);f=this.curves.getCurvePercent(s/5-1,f);var p=h+(i[s+1]-h)*f,g=l+(i[s+2]-l)*f,v=u+(i[s+3]-u)*f,m=c+(i[s+4]-c)*f;1>r?(n.r+=(p-n.r)*r,n.g+=(g-n.g)*r,n.b+=(v-n.b)*r,n.a+=(m-n.a)*r):(n.r=p,n.g=g,n.b=v,n.a=m)}}},a.AttachmentTimeline=function(t){this.curves=new a.Curves(t),this.frames=[],this.frames.length=t,this.attachmentNames=[],this.attachmentNames.length=t},a.AttachmentTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length},setFrame:function(t,e,r){this.frames[t]=e,this.attachmentNames[t]=r},apply:function(t,e){var r=this.frames;if(!(e<r[0])){var i;i=e>=r[r.length-1]?r.length-1:a.binarySearch(r,e,1)-1;var n=this.attachmentNames[i];t.slots[this.slotIndex].setAttachment(n?t.getAttachmentBySlotIndex(this.slotIndex,n):null)}}},a.SkeletonData=function(){this.bones=[],this.slots=[],this.skins=[],this.animations=[]},a.SkeletonData.prototype={defaultSkin:null,findBone:function(t){for(var e=this.bones,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null},findBoneIndex:function(t){for(var e=this.bones,r=0,i=e.length;i>r;r++)if(e[r].name==t)return r;return-1},findSlot:function(t){for(var e=this.slots,r=0,i=e.length;i>r;r++)if(e[r].name==t)return slot[r];return null},findSlotIndex:function(t){for(var e=this.slots,r=0,i=e.length;i>r;r++)if(e[r].name==t)return r;return-1},findSkin:function(t){for(var e=this.skins,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null},findAnimation:function(t){for(var e=this.animations,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null}},a.Skeleton=function(t){this.data=t,this.bones=[];for(var e=0,r=t.bones.length;r>e;e++){var i=t.bones[e],n=i.parent?this.bones[t.bones.indexOf(i.parent)]:null;this.bones.push(new a.Bone(i,n))}for(this.slots=[],this.drawOrder=[],e=0,r=t.slots.length;r>e;e++){var o=t.slots[e],s=this.bones[t.bones.indexOf(o.boneData)],h=new a.Slot(o,this,s);this.slots.push(h),this.drawOrder.push(h)}},a.Skeleton.prototype={x:0,y:0,skin:null,r:1,g:1,b:1,a:1,time:0,flipX:!1,flipY:!1,updateWorldTransform:function(){for(var t=this.flipX,e=this.flipY,r=this.bones,i=0,n=r.length;n>i;i++)r[i].updateWorldTransform(t,e)},setToSetupPose:function(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()},setBonesToSetupPose:function(){for(var t=this.bones,e=0,r=t.length;r>e;e++)t[e].setToSetupPose()},setSlotsToSetupPose:function(){for(var t=this.slots,e=0,r=t.length;r>e;e++)t[e].setToSetupPose(e)},getRootBone:function(){return this.bones.length?this.bones[0]:null},findBone:function(t){for(var e=this.bones,r=0,i=e.length;i>r;r++)if(e[r].data.name==t)return e[r];return null},findBoneIndex:function(t){for(var e=this.bones,r=0,i=e.length;i>r;r++)if(e[r].data.name==t)return r;return-1},findSlot:function(t){for(var e=this.slots,r=0,i=e.length;i>r;r++)if(e[r].data.name==t)return e[r];return null},findSlotIndex:function(t){for(var e=this.slots,r=0,i=e.length;i>r;r++)if(e[r].data.name==t)return r;
return-1},setSkinByName:function(t){var e=this.data.findSkin(t);if(!e)throw"Skin not found: "+t;this.setSkin(e)},setSkin:function(t){this.skin&&t&&t._attachAll(this,this.skin),this.skin=t},getAttachmentBySlotName:function(t,e){return this.getAttachmentBySlotIndex(this.data.findSlotIndex(t),e)},getAttachmentBySlotIndex:function(t,e){if(this.skin){var r=this.skin.getAttachment(t,e);if(r)return r}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(t,e):null},setAttachment:function(t,e){for(var r=this.slots,i=0,n=r.size;n>i;i++){var o=r[i];if(o.data.name==t){var s=null;if(e&&(s=this.getAttachment(i,e),null==s))throw"Attachment not found: "+e+", for slot: "+t;return void o.setAttachment(s)}}throw"Slot not found: "+t},update:function(t){time+=t}},a.AttachmentType={region:0},a.RegionAttachment=function(){this.offset=[],this.offset.length=8,this.uvs=[],this.uvs.length=8},a.RegionAttachment.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,width:0,height:0,rendererObject:null,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,setUVs:function(t,e,r,i,n){var o=this.uvs;n?(o[2]=t,o[3]=i,o[4]=t,o[5]=e,o[6]=r,o[7]=e,o[0]=r,o[1]=i):(o[0]=t,o[1]=i,o[2]=t,o[3]=e,o[4]=r,o[5]=e,o[6]=r,o[7]=i)},updateOffset:function(){var t=this.width/this.regionOriginalWidth*this.scaleX,e=this.height/this.regionOriginalHeight*this.scaleY,r=-this.width/2*this.scaleX+this.regionOffsetX*t,i=-this.height/2*this.scaleY+this.regionOffsetY*e,n=r+this.regionWidth*t,o=i+this.regionHeight*e,s=this.rotation*Math.PI/180,a=Math.cos(s),h=Math.sin(s),l=r*a+this.x,u=r*h,c=i*a+this.y,d=i*h,f=n*a+this.x,p=n*h,g=o*a+this.y,v=o*h,m=this.offset;m[0]=l-d,m[1]=c+u,m[2]=l-v,m[3]=g+u,m[4]=f-v,m[5]=g+p,m[6]=f-d,m[7]=c+p},computeVertices:function(t,e,r,i){t+=r.worldX,e+=r.worldY;var n=r.m00,o=r.m01,s=r.m10,a=r.m11,h=this.offset;i[0]=h[0]*n+h[1]*o+t,i[1]=h[0]*s+h[1]*a+e,i[2]=h[2]*n+h[3]*o+t,i[3]=h[2]*s+h[3]*a+e,i[4]=h[4]*n+h[5]*o+t,i[5]=h[4]*s+h[5]*a+e,i[6]=h[6]*n+h[7]*o+t,i[7]=h[6]*s+h[7]*a+e}},a.AnimationStateData=function(t){this.skeletonData=t,this.animationToMixTime={}},a.AnimationStateData.prototype={defaultMix:0,setMixByName:function(t,e,r){var i=this.skeletonData.findAnimation(t);if(!i)throw"Animation not found: "+t;var n=this.skeletonData.findAnimation(e);if(!n)throw"Animation not found: "+e;this.setMix(i,n,r)},setMix:function(t,e,r){this.animationToMixTime[t.name+":"+e.name]=r},getMix:function(t,e){var r=this.animationToMixTime[t.name+":"+e.name];return r?r:this.defaultMix}},a.AnimationState=function(t){this.data=t,this.queue=[]},a.AnimationState.prototype={animationSpeed:1,current:null,previous:null,currentTime:0,previousTime:0,currentLoop:!1,previousLoop:!1,mixTime:0,mixDuration:0,update:function(t){if(this.currentTime+=t*this.animationSpeed,this.previousTime+=t,this.mixTime+=t,this.queue.length>0){var e=this.queue[0];this.currentTime>=e.delay&&(this._setAnimation(e.animation,e.loop),this.queue.shift())}},apply:function(t){if(this.current)if(this.previous){this.previous.apply(t,this.previousTime,this.previousLoop);var e=this.mixTime/this.mixDuration;e>=1&&(e=1,this.previous=null),this.current.mix(t,this.currentTime,this.currentLoop,e)}else this.current.apply(t,this.currentTime,this.currentLoop)},clearAnimation:function(){this.previous=null,this.current=null,this.queue.length=0},_setAnimation:function(t,e){this.previous=null,t&&this.current&&(this.mixDuration=this.data.getMix(this.current,t),this.mixDuration>0&&(this.mixTime=0,this.previous=this.current,this.previousTime=this.currentTime,this.previousLoop=this.currentLoop)),this.current=t,this.currentLoop=e,this.currentTime=0},setAnimationByName:function(t,e){var r=this.data.skeletonData.findAnimation(t);if(!r)throw"Animation not found: "+t;this.setAnimation(r,e)},setAnimation:function(t,e){this.queue.length=0,this._setAnimation(t,e)},addAnimationByName:function(t,e,r){var i=this.data.skeletonData.findAnimation(t);if(!i)throw"Animation not found: "+t;this.addAnimation(i,e,r)},addAnimation:function(t,e,r){var i={};if(i.animation=t,i.loop=e,!r||0>=r){var n=this.queue.length?this.queue[this.queue.length-1].animation:this.current;r=null!=n?n.duration-this.data.getMix(n,t)+(r||0):0}i.delay=r,this.queue.push(i)},isComplete:function(){return!this.current||this.currentTime>=this.current.duration}},a.SkeletonJson=function(t){this.attachmentLoader=t},a.SkeletonJson.prototype={scale:1,readSkeletonData:function(t){for(var e,r=new a.SkeletonData,i=t.bones,n=0,o=i.length;o>n;n++){var s=i[n],h=null;if(s.parent&&(h=r.findBone(s.parent),!h))throw"Parent bone not found: "+s.parent;e=new a.BoneData(s.name,h),e.length=(s.length||0)*this.scale,e.x=(s.x||0)*this.scale,e.y=(s.y||0)*this.scale,e.rotation=s.rotation||0,e.scaleX=s.scaleX||1,e.scaleY=s.scaleY||1,r.bones.push(e)}var l=t.slots;for(n=0,o=l.length;o>n;n++){var u=l[n];if(e=r.findBone(u.bone),!e)throw"Slot bone not found: "+u.bone;var c=new a.SlotData(u.name,e),d=u.color;d&&(c.r=a.SkeletonJson.toColor(d,0),c.g=a.SkeletonJson.toColor(d,1),c.b=a.SkeletonJson.toColor(d,2),c.a=a.SkeletonJson.toColor(d,3)),c.attachmentName=u.attachment,r.slots.push(c)}var f=t.skins;for(var p in f)if(f.hasOwnProperty(p)){var g=f[p],v=new a.Skin(p);for(var m in g)if(g.hasOwnProperty(m)){var x=r.findSlotIndex(m),y=g[m];for(var b in y)if(y.hasOwnProperty(b)){var T=this.readAttachment(v,b,y[b]);null!=T&&v.addAttachment(x,b,T)}}r.skins.push(v),"default"==v.name&&(r.defaultSkin=v)}var S=t.animations;for(var w in S)S.hasOwnProperty(w)&&this.readAnimation(w,S[w],r);return r},readAttachment:function(t,e,r){e=r.name||e;var i=a.AttachmentType[r.type||"region"];if(i==a.AttachmentType.region){var n=new a.RegionAttachment;return n.x=(r.x||0)*this.scale,n.y=(r.y||0)*this.scale,n.scaleX=r.scaleX||1,n.scaleY=r.scaleY||1,n.rotation=r.rotation||0,n.width=(5000||32)*this.scale,n.height=(r.height||32)*this.scale,n.updateOffset(),n.rendererObject={},n.rendererObject.name=e,n.rendererObject.scale={},n.rendererObject.scale.x=n.scaleX,n.rendererObject.scale.y=n.scaleY,n.rendererObject.rotation=-n.rotation*Math.PI/180,n}throw"Unknown attachment type: "+i},readAnimation:function(t,e,r){var i,n,o,s,h,l,u,c=[],d=0,f=e.bones;for(var p in f)if(f.hasOwnProperty(p)){var g=r.findBoneIndex(p);if(-1==g)throw"Bone not found: "+p;var v=f[p];for(o in v)if(v.hasOwnProperty(o))if(h=v[o],"rotate"==o){for(n=new a.RotateTimeline(h.length),n.boneIndex=g,i=0,l=0,u=h.length;u>l;l++)s=h[l],n.setFrame(i,s.time,s.angle),a.SkeletonJson.readCurve(n,i,s),i++;c.push(n),d=Math.max(d,n.frames[2*n.getFrameCount()-2])}else{if("translate"!=o&&"scale"!=o)throw"Invalid timeline type for a bone: "+o+" ("+p+")";var m=1;for("scale"==o?n=new a.ScaleTimeline(h.length):(n=new a.TranslateTimeline(h.length),m=this.scale),n.boneIndex=g,i=0,l=0,u=h.length;u>l;l++){s=h[l];var x=(s.x||0)*m,y=(s.y||0)*m;n.setFrame(i,s.time,x,y),a.SkeletonJson.readCurve(n,i,s),i++}c.push(n),d=Math.max(d,n.frames[3*n.getFrameCount()-3])}}var b=e.slots;for(var T in b)if(b.hasOwnProperty(T)){var S=b[T],w=r.findSlotIndex(T);for(o in S)if(S.hasOwnProperty(o))if(h=S[o],"color"==o){for(n=new a.ColorTimeline(h.length),n.slotIndex=w,i=0,l=0,u=h.length;u>l;l++){s=h[l];var E=s.color,_=a.SkeletonJson.toColor(E,0),C=a.SkeletonJson.toColor(E,1),A=a.SkeletonJson.toColor(E,2),R=a.SkeletonJson.toColor(E,3);n.setFrame(i,s.time,_,C,A,R),a.SkeletonJson.readCurve(n,i,s),i++}c.push(n),d=Math.max(d,n.frames[5*n.getFrameCount()-5])}else{if("attachment"!=o)throw"Invalid timeline type for a slot: "+o+" ("+T+")";for(n=new a.AttachmentTimeline(h.length),n.slotIndex=w,i=0,l=0,u=h.length;u>l;l++)s=h[l],n.setFrame(i++,s.time,s.name);c.push(n),d=Math.max(d,n.frames[n.getFrameCount()-1])}}r.animations.push(new a.Animation(t,c,d))}},a.SkeletonJson.readCurve=function(t,e,r){var i=r.curve;i&&("stepped"==i?t.curves.setStepped(e):i instanceof Array&&t.curves.setCurve(e,i[0],i[1],i[2],i[3]))},a.SkeletonJson.toColor=function(t,e){if(8!=t.length)throw"Color hexidecimal length must be 8, recieved: "+t;return parseInt(t.substr(2*e,2),16)/255},a.Atlas=function(t,e){this.textureLoader=e,this.pages=[],this.regions=[];var r=new a.AtlasReader(t),i=[];i.length=4;for(var n=null;;){var o=r.readLine();if(null==o)break;if(o=r.trim(o),o.length)if(n){var s=new a.AtlasRegion;s.name=o,s.page=n,s.rotate="true"==r.readValue(),r.readTuple(i);var h=parseInt(i[0],10),l=parseInt(i[1],10);r.readTuple(i);var u=parseInt(i[0],10),c=parseInt(i[1],10);s.u=h/n.width,s.v=l/n.height,s.rotate?(s.u2=(h+c)/n.width,s.v2=(l+u)/n.height):(s.u2=(h+u)/n.width,s.v2=(l+c)/n.height),s.x=h,s.y=l,s.width=Math.abs(u),s.height=Math.abs(c),4==r.readTuple(i)&&(s.splits=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10),parseInt(i[3],10)],4==r.readTuple(i)&&(s.pads=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10),parseInt(i[3],10)],r.readTuple(i))),s.originalWidth=parseInt(i[0],10),s.originalHeight=parseInt(i[1],10),r.readTuple(i),s.offsetX=parseInt(i[0],10),s.offsetY=parseInt(i[1],10),s.index=parseInt(r.readValue(),10),this.regions.push(s)}else{n=new a.AtlasPage,n.name=o,n.format=a.Atlas.Format[r.readValue()],r.readTuple(i),n.minFilter=a.Atlas.TextureFilter[i[0]],n.magFilter=a.Atlas.TextureFilter[i[1]];var d=r.readValue();n.uWrap=a.Atlas.TextureWrap.clampToEdge,n.vWrap=a.Atlas.TextureWrap.clampToEdge,"x"==d?n.uWrap=a.Atlas.TextureWrap.repeat:"y"==d?n.vWrap=a.Atlas.TextureWrap.repeat:"xy"==d&&(n.uWrap=n.vWrap=a.Atlas.TextureWrap.repeat),e.load(n,o),this.pages.push(n)}else n=null}},a.Atlas.prototype={findRegion:function(t){for(var e=this.regions,r=0,i=e.length;i>r;r++)if(e[r].name==t)return e[r];return null},dispose:function(){for(var t=this.pages,e=0,r=t.length;r>e;e++)this.textureLoader.unload(t[e].rendererObject)},updateUVs:function(t){for(var e=this.regions,r=0,i=e.length;i>r;r++){var n=e[r];n.page==t&&(n.u=n.x/t.width,n.v=n.y/t.height,n.rotate?(n.u2=(n.x+n.height)/t.width,n.v2=(n.y+n.width)/t.height):(n.u2=(n.x+n.width)/t.width,n.v2=(n.y+n.height)/t.height))}}},a.Atlas.Format={alpha:0,intensity:1,luminanceAlpha:2,rgb565:3,rgba4444:4,rgb888:5,rgba8888:6},a.Atlas.TextureFilter={nearest:0,linear:1,mipMap:2,mipMapNearestNearest:3,mipMapLinearNearest:4,mipMapNearestLinear:5,mipMapLinearLinear:6},a.Atlas.TextureWrap={mirroredRepeat:0,clampToEdge:1,repeat:2},a.AtlasPage=function(){},a.AtlasPage.prototype={name:null,format:null,minFilter:null,magFilter:null,uWrap:null,vWrap:null,rendererObject:null,width:0,height:0},a.AtlasRegion=function(){},a.AtlasRegion.prototype={page:null,name:null,x:0,y:0,width:0,height:0,u:0,v:0,u2:0,v2:0,offsetX:0,offsetY:0,originalWidth:0,originalHeight:0,index:0,rotate:!1,splits:null,pads:null},a.AtlasReader=function(t){this.lines=t.split(/\r\n|\r|\n/)},a.AtlasReader.prototype={index:0,trim:function(t){return t.replace(/^\s+|\s+$/g,"")},readLine:function(){return this.index>=this.lines.length?null:this.lines[this.index++]},readValue:function(){var t=this.readLine(),e=t.indexOf(":");if(-1==e)throw"Invalid line: "+t;return this.trim(t.substring(e+1))},readTuple:function(t){var e=this.readLine(),r=e.indexOf(":");if(-1==r)throw"Invalid line: "+e;for(var i=0,n=r+1;3>i;i++){var o=e.indexOf(",",n);if(-1==o){if(!i)throw"Invalid line: "+e;break}t[i]=this.trim(e.substr(n,o-n)),n=o+1}return t[i]=this.trim(e.substring(n)),i+1}},a.AtlasAttachmentLoader=function(t){this.atlas=t},a.AtlasAttachmentLoader.prototype={newAttachment:function(t,e,r){switch(e){case a.AttachmentType.region:var i=this.atlas.findRegion(r);if(!i)throw"Region not found in atlas: "+r+" ("+e+")";var n=new a.RegionAttachment(r);return n.rendererObject=i,n.setUVs(i.u,i.v,i.u2,i.v2,i.rotate),n.regionOffsetX=i.offsetX,n.regionOffsetY=i.offsetY,n.regionWidth=i.width,n.regionHeight=i.height,n.regionOriginalWidth=i.originalWidth,n.regionOriginalHeight=i.originalHeight,n}throw"Unknown attachment type: "+e}},a.Bone.yDown=!0,i.AnimCache={},i.Spine=function(t){if(i.DisplayObjectContainer.call(this),this.spineData=i.AnimCache[t],!this.spineData)throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: "+t);this.skeleton=new a.Skeleton(this.spineData),this.skeleton.updateWorldTransform(),this.stateData=new a.AnimationStateData(this.spineData),this.state=new a.AnimationState(this.stateData),this.slotContainers=[];for(var e=0,r=this.skeleton.drawOrder.length;r>e;e++){var n=this.skeleton.drawOrder[e],o=n.attachment,s=new i.DisplayObjectContainer;if(this.slotContainers.push(s),this.addChild(s),o instanceof a.RegionAttachment){var h=o.rendererObject.name,l=this.createSprite(n,o.rendererObject);n.currentSprite=l,n.currentSpriteName=h,s.addChild(l)}}},i.Spine.prototype=Object.create(i.DisplayObjectContainer.prototype),i.Spine.prototype.constructor=i.Spine,i.Spine.prototype.updateTransform=function(){this.lastTime=this.lastTime||Date.now();var t=.001*(Date.now()-this.lastTime);this.lastTime=Date.now(),this.state.update(t),this.state.apply(this.skeleton),this.skeleton.updateWorldTransform();for(var e=this.skeleton.drawOrder,r=0,n=e.length;n>r;r++){var o=e[r],s=o.attachment,h=this.slotContainers[r];if(s instanceof a.RegionAttachment){if(s.rendererObject&&(!o.currentSpriteName||o.currentSpriteName!=s.name)){var l=s.rendererObject.name;if(void 0!==o.currentSprite&&(o.currentSprite.visible=!1),o.sprites=o.sprites||{},void 0!==o.sprites[l])o.sprites[l].visible=!0;else{var u=this.createSprite(o,s.rendererObject);h.addChild(u)}o.currentSprite=o.sprites[l],o.currentSpriteName=l}h.visible=!0;var c=o.bone;h.position.x=c.worldX+s.x*c.m00+s.y*c.m01,h.position.y=c.worldY+s.x*c.m10+s.y*c.m11,h.scale.x=c.worldScaleX,h.scale.y=c.worldScaleY,h.rotation=-(o.bone.worldRotation*Math.PI/180),h.alpha=o.a,o.currentSprite.tint=i.rgb2hex([o.r,o.g,o.b])}else h.visible=!1}i.DisplayObjectContainer.prototype.updateTransform.call(this)},i.Spine.prototype.createSprite=function(t,e){var r=i.TextureCache[e.name]?e.name:e.name+".png",n=new i.Sprite(i.Texture.fromFrame(r));return n.scale=e.scale,n.rotation=e.rotation,n.anchor.x=n.anchor.y=.5,t.sprites=t.sprites||{},t.sprites[e.name]=n,n},i.BaseTextureCache={},i.texturesToUpdate=[],i.texturesToDestroy=[],i.BaseTextureCacheIdGenerator=0,i.BaseTexture=function(t,e){if(i.EventTarget.call(this),this.width=100,this.height=100,this.scaleMode=e||i.scaleModes.DEFAULT,this.hasLoaded=!1,this.source=t,this.id=i.BaseTextureCacheIdGenerator++,this.premultipliedAlpha=!0,this._glTextures=[],this._dirty=[],t){if((this.source.complete||this.source.getContext)&&this.source.width&&this.source.height)this.hasLoaded=!0,this.width=this.source.width,this.height=this.source.height,i.texturesToUpdate.push(this);else{var r=this;this.source.onload=function(){r.hasLoaded=!0,r.width=r.source.width,r.height=r.source.height;for(var t=0;t<r._glTextures.length;t++)r._dirty[t]=!0;r.dispatchEvent({type:"loaded",content:r})},this.source.onerror=function(){r.dispatchEvent({type:"error",content:r})}}this.imageUrl=null,this._powerOf2=!1}},i.BaseTexture.prototype.constructor=i.BaseTexture,i.BaseTexture.prototype.destroy=function(){this.imageUrl?(delete i.BaseTextureCache[this.imageUrl],delete i.TextureCache[this.imageUrl],this.imageUrl=null,this.source.src=null):this.source&&this.source._pixiId&&delete i.BaseTextureCache[this.source._pixiId],this.source=null,i.texturesToDestroy.push(this)},i.BaseTexture.prototype.updateSourceImage=function(t){this.hasLoaded=!1,this.source.src=null,this.source.src=t},i.BaseTexture.fromImage=function(t,e,r){var n=i.BaseTextureCache[t];if(void 0===e&&-1===t.indexOf("data:")&&(e=!0),!n){var o=new Image;e&&(o.crossOrigin=""),o.src=t,n=new i.BaseTexture(o,r),n.imageUrl=t,i.BaseTextureCache[t]=n}return n},i.BaseTexture.fromCanvas=function(t,e){t._pixiId||(t._pixiId="canvas_"+i.TextureCacheIdGenerator++);var r=i.BaseTextureCache[t._pixiId];return r||(r=new i.BaseTexture(t,e),i.BaseTextureCache[t._pixiId]=r),r},i.TextureCache={},i.FrameCache={},i.TextureCacheIdGenerator=0,i.Texture=function(t,e){if(i.EventTarget.call(this),this.noFrame=!1,e||(this.noFrame=!0,e=new i.Rectangle(0,0,1,1)),t instanceof i.Texture&&(t=t.baseTexture),this.baseTexture=t,this.frame=e,this.trim=null,this.valid=!1,this.scope=this,this._uvs=null,this.width=0,this.height=0,this.crop=new i.Rectangle(0,0,1,1),t.hasLoaded)this.noFrame&&(e=new i.Rectangle(0,0,t.width,t.height)),this.setFrame(e);else{var r=this;t.addEventListener("loaded",function(){r.onBaseTextureLoaded()})}},i.Texture.prototype.constructor=i.Texture,i.Texture.prototype.onBaseTextureLoaded=function(){var t=this.baseTexture;t.removeEventListener("loaded",this.onLoaded),this.noFrame&&(this.frame=new i.Rectangle(0,0,t.width,t.height)),this.setFrame(this.frame),this.scope.dispatchEvent({type:"update",content:this})},i.Texture.prototype.destroy=function(t){t&&this.baseTexture.destroy(),this.valid=!1},i.Texture.prototype.setFrame=function(t){if(this.noFrame=!1,this.frame=t,this.width=t.width,this.height=t.height,this.crop.x=t.x,this.crop.y=t.y,this.crop.width=t.width,this.crop.height=t.height,!this.trim&&(t.x+t.width>this.baseTexture.width||t.y+t.height>this.baseTexture.height))throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.valid=t&&t.width&&t.height&&this.baseTexture.source&&this.baseTexture.hasLoaded,this.trim&&(this.width=this.trim.width,this.height=this.trim.height,this.frame.width=this.trim.width,this.frame.height=this.trim.height),this.valid&&i.Texture.frameUpdates.push(this)},i.Texture.prototype._updateWebGLuvs=function(){this._uvs||(this._uvs=new i.TextureUvs);var t=this.crop,e=this.baseTexture.width,r=this.baseTexture.height;this._uvs.x0=t.x/e,this._uvs.y0=t.y/r,this._uvs.x1=(t.x+t.width)/e,this._uvs.y1=t.y/r,this._uvs.x2=(t.x+t.width)/e,this._uvs.y2=(t.y+t.height)/r,this._uvs.x3=t.x/e,this._uvs.y3=(t.y+t.height)/r},i.Texture.fromImage=function(t,e,r){var n=i.TextureCache[t];return n||(n=new i.Texture(i.BaseTexture.fromImage(t,e,r)),i.TextureCache[t]=n),n},i.Texture.fromFrame=function(t){var e=i.TextureCache[t];if(!e)throw new Error('The frameId "'+t+'" does not exist in the texture cache ');return e},i.Texture.fromCanvas=function(t,e){var r=i.BaseTexture.fromCanvas(t,e);return new i.Texture(r)},i.Texture.addTextureToCache=function(t,e){i.TextureCache[e]=t},i.Texture.removeTextureFromCache=function(t){var e=i.TextureCache[t];return delete i.TextureCache[t],delete i.BaseTextureCache[t],e},i.Texture.frameUpdates=[],i.TextureUvs=function(){this.x0=0,this.y0=0,this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.x3=0,this.y3=0},i.RenderTexture=function(t,e,r,n){if(i.EventTarget.call(this),this.width=t||100,this.height=e||100,this.frame=new i.Rectangle(0,0,this.width,this.height),this.crop=new i.Rectangle(0,0,this.width,this.height),this.baseTexture=new i.BaseTexture,this.baseTexture.width=this.width,this.baseTexture.height=this.height,this.baseTexture._glTextures=[],this.baseTexture.scaleMode=n||i.scaleModes.DEFAULT,this.baseTexture.hasLoaded=!0,this.renderer=r||i.defaultRenderer,this.renderer.type===i.WEBGL_RENDERER){var o=this.renderer.gl;this.textureBuffer=new i.FilterTexture(o,this.width,this.height,this.baseTexture.scaleMode),this.baseTexture._glTextures[o.id]=this.textureBuffer.texture,this.render=this.renderWebGL,this.projection=new i.Point(this.width/2,-this.height/2)}else this.render=this.renderCanvas,this.textureBuffer=new i.CanvasBuffer(this.width,this.height),this.baseTexture.source=this.textureBuffer.canvas;this.valid=!0,i.Texture.frameUpdates.push(this)},i.RenderTexture.prototype=Object.create(i.Texture.prototype),i.RenderTexture.prototype.constructor=i.RenderTexture,i.RenderTexture.prototype.resize=function(t,e,r){(t!==this.width||e!==this.height)&&(this.width=this.frame.width=this.crop.width=t,this.height=this.frame.height=this.crop.height=e,r&&(this.baseTexture.width=this.width,this.baseTexture.height=this.height),this.renderer.type===i.WEBGL_RENDERER&&(this.projection.x=this.width/2,this.projection.y=-this.height/2),this.textureBuffer.resize(this.width,this.height))},i.RenderTexture.prototype.clear=function(){this.renderer.type===i.WEBGL_RENDERER&&this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER,this.textureBuffer.frameBuffer),this.textureBuffer.clear()},i.RenderTexture.prototype.renderWebGL=function(t,e,r){var n=this.renderer.gl;n.colorMask(!0,!0,!0,!0),n.viewport(0,0,this.width,this.height),n.bindFramebuffer(n.FRAMEBUFFER,this.textureBuffer.frameBuffer),r&&this.textureBuffer.clear();var o=t.children,s=t.worldTransform;t.worldTransform=i.RenderTexture.tempMatrix,t.worldTransform.d=-1,t.worldTransform.ty=-2*this.projection.y,e&&(t.worldTransform.tx=e.x,t.worldTransform.ty-=e.y);for(var a=0,h=o.length;h>a;a++)o[a].updateTransform();i.WebGLRenderer.updateTextures(),this.renderer.spriteBatch.dirty=!0,this.renderer.renderDisplayObject(t,this.projection,this.textureBuffer.frameBuffer),t.worldTransform=s,this.renderer.spriteBatch.dirty=!0},i.RenderTexture.prototype.renderCanvas=function(t,e,r){var n=t.children,o=t.worldTransform;t.worldTransform=i.RenderTexture.tempMatrix,e?(t.worldTransform.tx=e.x,t.worldTransform.ty=e.y):(t.worldTransform.tx=0,t.worldTransform.ty=0);for(var s=0,a=n.length;a>s;s++)n[s].updateTransform();r&&this.textureBuffer.clear();var h=this.textureBuffer.context;this.renderer.renderDisplayObject(t,h),h.setTransform(1,0,0,1,0,0),t.worldTransform=o},i.RenderTexture.tempMatrix=new i.Matrix,i.AssetLoader=function(t,e){i.EventTarget.call(this),this.assetURLs=t,this.crossorigin=e,this.loadersByType={jpg:i.ImageLoader,jpeg:i.ImageLoader,png:i.ImageLoader,gif:i.ImageLoader,webp:i.ImageLoader,json:i.JsonLoader,atlas:i.AtlasLoader,anim:i.SpineLoader,xml:i.BitmapFontLoader,fnt:i.BitmapFontLoader}},i.AssetLoader.prototype.constructor=i.AssetLoader,i.AssetLoader.prototype._getDataType=function(t){var e="data:",r=t.slice(0,e.length).toLowerCase();if(r===e){var i=t.slice(e.length),n=i.indexOf(",");if(-1===n)return null;var o=i.slice(0,n).split(";")[0];return o&&"text/plain"!==o.toLowerCase()?o.split("/").pop().toLowerCase():"txt"}return null},i.AssetLoader.prototype.load=function(){function t(t){e.onAssetLoaded(t.content)}var e=this;this.loadCount=this.assetURLs.length;for(var r=0;r<this.assetURLs.length;r++){var i=this.assetURLs[r],n=this._getDataType(i);n||(n=i.split("?").shift().split(".").pop().toLowerCase());var o=this.loadersByType[n];if(!o)throw new Error(n+" is an unsupported file type");var s=new o(i,this.crossorigin);s.addEventListener("loaded",t),s.load()}},i.AssetLoader.prototype.onAssetLoaded=function(t){this.loadCount--,this.dispatchEvent({type:"onProgress",content:this,loader:t}),this.onProgress&&this.onProgress(t),this.loadCount||(this.dispatchEvent({type:"onComplete",content:this}),this.onComplete&&this.onComplete())},i.JsonLoader=function(t,e){i.EventTarget.call(this),this.url=t,this.crossorigin=e,this.baseUrl=t.replace(/[^\/]*$/,""),this.loaded=!1},i.JsonLoader.prototype.constructor=i.JsonLoader,i.JsonLoader.prototype.load=function(){var t=this;window.XDomainRequest&&t.crossorigin?(this.ajaxRequest=new window.XDomainRequest,this.ajaxRequest.timeout=3e3,this.ajaxRequest.onerror=function(){t.onError()},this.ajaxRequest.ontimeout=function(){t.onError()},this.ajaxRequest.onprogress=function(){}):this.ajaxRequest=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),this.ajaxRequest.onload=function(){t.onJSONLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.send()},i.JsonLoader.prototype.onJSONLoaded=function(){if(!this.ajaxRequest.responseText)return void this.onError();if(this.json=JSON.parse(this.ajaxRequest.responseText),this.json.frames){var t=this,e=this.baseUrl+this.json.meta.image,r=new i.ImageLoader(e,this.crossorigin),n=this.json.frames;this.texture=r.texture.baseTexture,r.addEventListener("loaded",function(){t.onLoaded()});for(var o in n){var s=n[o].frame;if(s&&(i.TextureCache[o]=new i.Texture(this.texture,{x:s.x,y:s.y,width:s.w,height:s.h}),i.TextureCache[o].crop=new i.Rectangle(s.x,s.y,s.w,s.h),n[o].trimmed)){var h=n[o].sourceSize,l=n[o].spriteSourceSize;i.TextureCache[o].trim=new i.Rectangle(l.x,l.y,h.w,h.h)}}r.load()}else if(this.json.bones){var u=new a.SkeletonJson,c=u.readSkeletonData(this.json);i.AnimCache[this.url]=c,this.onLoaded()}else this.onLoaded()},i.JsonLoader.prototype.onLoaded=function(){this.loaded=!0,this.dispatchEvent({type:"loaded",content:this})},i.JsonLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})},i.AtlasLoader=function(t,e){i.EventTarget.call(this),this.url=t,this.baseUrl=t.replace(/[^\/]*$/,""),this.crossorigin=e,this.loaded=!1},i.AtlasLoader.constructor=i.AtlasLoader,i.AtlasLoader.prototype.load=function(){this.ajaxRequest=new i.AjaxRequest,this.ajaxRequest.onreadystatechange=this.onAtlasLoaded.bind(this),this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/json"),this.ajaxRequest.send(null)},i.AtlasLoader.prototype.onAtlasLoaded=function(){if(4===this.ajaxRequest.readyState)if(200===this.ajaxRequest.status||-1===window.location.href.indexOf("http")){this.atlas={meta:{image:[]},frames:[]};var t=this.ajaxRequest.responseText.split(/\r?\n/),e=-3,r=0,n=null,o=!1,s=0,a=0,h=this.onLoaded.bind(this);for(s=0;s<t.length;s++)if(t[s]=t[s].replace(/^\s+|\s+$/g,""),""===t[s]&&(o=s+1),t[s].length>0){if(o===s)this.atlas.meta.image.push(t[s]),r=this.atlas.meta.image.length-1,this.atlas.frames.push({}),e=-3;else if(e>0)if(e%7===1)null!=n&&(this.atlas.frames[r][n.name]=n),n={name:t[s],frame:{}};else{var l=t[s].split(" ");if(e%7===3)n.frame.x=Number(l[1].replace(",","")),n.frame.y=Number(l[2]);else if(e%7===4)n.frame.w=Number(l[1].replace(",","")),n.frame.h=Number(l[2]);else if(e%7===5){var u={x:0,y:0,w:Number(l[1].replace(",","")),h:Number(l[2])};u.w>n.frame.w||u.h>n.frame.h?(n.trimmed=!0,n.realSize=u):n.trimmed=!1}}e++}if(null!=n&&(this.atlas.frames[r][n.name]=n),this.atlas.meta.image.length>0){for(this.images=[],a=0;a<this.atlas.meta.image.length;a++){var c=this.baseUrl+this.atlas.meta.image[a],d=this.atlas.frames[a];this.images.push(new i.ImageLoader(c,this.crossorigin));for(s in d){var f=d[s].frame;f&&(i.TextureCache[s]=new i.Texture(this.images[a].texture.baseTexture,{x:f.x,y:f.y,width:f.w,height:f.h}),d[s].trimmed&&(i.TextureCache[s].realSize=d[s].realSize,i.TextureCache[s].trim.x=0,i.TextureCache[s].trim.y=0))}}for(this.currentImageId=0,a=0;a<this.images.length;a++)this.images[a].addEventListener("loaded",h);this.images[this.currentImageId].load()}else this.onLoaded()}else this.onError()},i.AtlasLoader.prototype.onLoaded=function(){this.images.length-1>this.currentImageId?(this.currentImageId++,this.images[this.currentImageId].load()):(this.loaded=!0,this.dispatchEvent({type:"loaded",content:this}))},i.AtlasLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})},i.SpriteSheetLoader=function(t,e){i.EventTarget.call(this),this.url=t,this.crossorigin=e,this.baseUrl=t.replace(/[^\/]*$/,""),this.texture=null,this.frames={}},i.SpriteSheetLoader.prototype.constructor=i.SpriteSheetLoader,i.SpriteSheetLoader.prototype.load=function(){var t=this,e=new i.JsonLoader(this.url,this.crossorigin);e.addEventListener("loaded",function(e){t.json=e.content.json,t.onLoaded()}),e.load()},i.SpriteSheetLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},i.ImageLoader=function(t,e){i.EventTarget.call(this),this.texture=i.Texture.fromImage(t,e),this.frames=[]},i.ImageLoader.prototype.constructor=i.ImageLoader,i.ImageLoader.prototype.load=function(){if(this.texture.baseTexture.hasLoaded)this.onLoaded();else{var t=this;this.texture.baseTexture.addEventListener("loaded",function(){t.onLoaded()})}},i.ImageLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})},i.ImageLoader.prototype.loadFramedSpriteSheet=function(t,e,r){this.frames=[];for(var n=Math.floor(this.texture.width/t),o=Math.floor(this.texture.height/e),s=0,a=0;o>a;a++)for(var h=0;n>h;h++,s++){var l=new i.Texture(this.texture,{x:h*t,y:a*e,width:t,height:e});this.frames.push(l),r&&(i.TextureCache[r+"-"+s]=l)}if(this.texture.baseTexture.hasLoaded)this.onLoaded();else{var u=this;this.texture.baseTexture.addEventListener("loaded",function(){u.onLoaded()})}},i.BitmapFontLoader=function(t,e){i.EventTarget.call(this),this.url=t,this.crossorigin=e,this.baseUrl=t.replace(/[^\/]*$/,""),this.texture=null},i.BitmapFontLoader.prototype.constructor=i.BitmapFontLoader,i.BitmapFontLoader.prototype.load=function(){this.ajaxRequest=new i.AjaxRequest;var t=this;this.ajaxRequest.onreadystatechange=function(){t.onXMLLoaded()},this.ajaxRequest.open("GET",this.url,!0),this.ajaxRequest.overrideMimeType&&this.ajaxRequest.overrideMimeType("application/xml"),this.ajaxRequest.send(null)},


i.BitmapFontLoader.prototype.onXMLLoaded=function(){
	if(4===this.ajaxRequest.readyState&&(200===this.ajaxRequest.status||-1===window.location.protocol.indexOf("http"))){
		var t=this.ajaxRequest.responseXML;
		if(!t||/MSIE 9/i.test(navigator.userAgent)||navigator.isCocoonJS)
			if("function"==typeof window.DOMParser){
				var e=new DOMParser;
				t=e.parseFromString(this.ajaxRequest.responseText,"text/xml")
			}else{
				var r=document.createElement("div");
				r.innerHTML=this.ajaxRequest.responseText,
				t=r
			}
			var n=this.baseUrl+t.getElementsByTagName("page")[0].getAttribute("file"),
			o=new i.ImageLoader(n,this.crossorigin);
			this.texture=o.texture.baseTexture;
			var s={},
			a=t.getElementsByTagName("info")[0],
			h=t.getElementsByTagName("common")[0];
			s.font=a.getAttribute("face"),
			s.size=parseInt(a.getAttribute("size"),10),
			s.lineHeight=parseInt(h.getAttribute("lineHeight"),10),
			s.chars={};
			for(var l=t.getElementsByTagName("char"),u=0;u<l.length;u++){
				var c=parseInt(l[u].getAttribute("id"),10),
				d=new i.Rectangle(parseInt(l[u].getAttribute("x"),10),
					parseInt(l[u].getAttribute("y"),10),
					parseInt(l[u].getAttribute("width"),10),
					parseInt(l[u].getAttribute("height"),10));
				s.chars[c]={
					xOffset:parseInt(l[u].getAttribute("xoffset"),10),
					yOffset:parseInt(l[u].getAttribute("yoffset"),10),
					xAdvance:parseInt(l[u].getAttribute("xadvance"),10),
					kerning:{},
					texture:i.TextureCache[c]=new i.Texture(this.texture,d)
				}
			}
			var f=t.getElementsByTagName("kerning");
			for(u=0;u<f.length;u++){
				var p=parseInt(f[u].getAttribute("first"),10),
				g=parseInt(f[u].getAttribute("second"),10),
				v=parseInt(f[u].getAttribute("amount"),10);
				s.chars[g].kerning[p]=v
			}
			i.BitmapText.fonts[s.font]=s;
			var m=this;
			o.addEventListener("loaded",function(){
				m.onLoaded()
			}),
			o.load()
		}
	},
	i.BitmapFontLoader.prototype.onLoaded=function(){
		this.dispatchEvent({type:"loaded",content:this})
	},
	i.SpineLoader=function(t,e){
		i.EventTarget.call(this),
		this.url=t,
		this.crossorigin=e,
		this.loaded=!1
	},
	i.SpineLoader.prototype.constructor=i.SpineLoader,
	i.SpineLoader.prototype.load=function(){
		var t=this,
		e=new i.JsonLoader(this.url,this.crossorigin);
		e.addEventListener("loaded",function(e){
			t.json=e.content.json,
			t.onLoaded()
		}),
		e.load()
	},
	i.SpineLoader.prototype.onLoaded=function(){
		this.loaded=!0,
		this.dispatchEvent({type:"loaded",content:this})
	},
	i.AbstractFilter=function(t,e){
		this.passes=[this],
		this.shaders=[],
		this.dirty=!0,
		this.padding=0,
		this.uniforms=e||{},
		this.fragmentSrc=t||[]
	},
	i.AlphaMaskFilter=function(t){
		i.AbstractFilter.call(this),
		this.passes=[this],
		t.baseTexture._powerOf2=!0,
		this.uniforms={mask:{type:"sampler2D",value:t},
		mapDimensions:{type:"2f",value:{x:1,y:5112}},
		dimensions:{type:"4fv",value:[0,0,0,0]}},
		t.baseTexture.hasLoaded?(this.uniforms.mask.value.x=t.width,this.uniforms.mask.value.y=t.height):(this.boundLoadedFunction=this.onTextureLoaded.bind(this),
			t.baseTexture.on("loaded",this.boundLoadedFunction)),
		this.fragmentSrc=[
		"precision mediump float;",
		"varying vec2 vTextureCoord;",
		"varying vec4 vColor;",
		"uniform sampler2D mask;",
		"uniform sampler2D uSampler;",
		"uniform vec2 offset;",
		"uniform vec4 dimensions;",
		"uniform vec2 mapDimensions;",
		"void main(void) {",
		"   vec2 mapCords = vTextureCoord.xy;",
		"   mapCords += (dimensions.zw + offset)/ dimensions.xy ;",
		"   mapCords.y *= -1.0;",
		"   mapCords.y += 1.0;",
		"   mapCords *= dimensions.xy / mapDimensions;",
		"   vec4 original =  texture2D(uSampler, vTextureCoord);",
		"   float maskAlpha =  texture2D(mask, mapCords).r;",
		"   original *= maskAlpha;",
		"   gl_FragColor =  original;",
		"}"]
},


i.AlphaMaskFilter.prototype=Object.create(i.AbstractFilter.prototype),i.AlphaMaskFilter.prototype.constructor=i.AlphaMaskFilter,i.AlphaMaskFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.mask.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.mask.value.height,this.uniforms.mask.value.baseTexture.off("loaded",this.boundLoadedFunction)},Object.defineProperty(i.AlphaMaskFilter.prototype,"map",{get:function(){return this.uniforms.mask.value},set:function(t){this.uniforms.mask.value=t}}),i.ColorMatrixFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={matrix:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform mat4 matrix;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;","}"]},i.ColorMatrixFilter.prototype=Object.create(i.AbstractFilter.prototype),i.ColorMatrixFilter.prototype.constructor=i.ColorMatrixFilter,Object.defineProperty(i.ColorMatrixFilter.prototype,"matrix",{get:function(){return this.uniforms.matrix.value},set:function(t){this.uniforms.matrix.value=t}}),i.GrayFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={gray:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float gray;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);","}"]},i.GrayFilter.prototype=Object.create(i.AbstractFilter.prototype),i.GrayFilter.prototype.constructor=i.GrayFilter,Object.defineProperty(i.GrayFilter.prototype,"gray",{get:function(){return this.uniforms.gray.value},set:function(t){this.uniforms.gray.value=t}}),i.DisplacementFilter=function(t){i.AbstractFilter.call(this),this.passes=[this],t.baseTexture._powerOf2=!0,this.uniforms={displacementMap:{type:"sampler2D",value:t},scale:{type:"2f",value:{x:30,y:30}},offset:{type:"2f",value:{x:0,y:0}},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}},t.baseTexture.hasLoaded?(this.uniforms.mapDimensions.value.x=t.width,this.uniforms.mapDimensions.value.y=t.height):(this.boundLoadedFunction=this.onTextureLoaded.bind(this),t.baseTexture.on("loaded",this.boundLoadedFunction)),this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D displacementMap;","uniform sampler2D uSampler;","uniform vec2 scale;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   vec2 matSample = texture2D(displacementMap, mapCords).xy;","   matSample -= 0.5;","   matSample *= scale;","   matSample /= mapDimensions;","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);","   vec2 cord = vTextureCoord;","}"]},i.DisplacementFilter.prototype=Object.create(i.AbstractFilter.prototype),i.DisplacementFilter.prototype.constructor=i.DisplacementFilter,i.DisplacementFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.displacementMap.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.displacementMap.value.height,this.uniforms.displacementMap.value.baseTexture.off("loaded",this.boundLoadedFunction)},Object.defineProperty(i.DisplacementFilter.prototype,"map",{get:function(){return this.uniforms.displacementMap.value},set:function(t){this.uniforms.displacementMap.value=t}}),Object.defineProperty(i.DisplacementFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value},set:function(t){this.uniforms.scale.value=t}}),Object.defineProperty(i.DisplacementFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value},set:function(t){this.uniforms.offset.value=t}}),i.PixelateFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={invert:{type:"1f",value:0},dimensions:{type:"4fv",value:new Float32Array([1e4,100,10,10])},pixelSize:{type:"2f",value:{x:10,y:10}}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 testDim;","uniform vec4 dimensions;","uniform vec2 pixelSize;","uniform sampler2D uSampler;","void main(void) {","   vec2 coord = vTextureCoord;","   vec2 size = dimensions.xy/pixelSize;","   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;","   gl_FragColor = texture2D(uSampler, color);","}"]},i.PixelateFilter.prototype=Object.create(i.AbstractFilter.prototype),i.PixelateFilter.prototype.constructor=i.PixelateFilter,Object.defineProperty(i.PixelateFilter.prototype,"size",{get:function(){return this.uniforms.pixelSize.value},set:function(t){this.dirty=!0,this.uniforms.pixelSize.value=t}}),i.BlurXFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;","   gl_FragColor = sum;","}"]},i.BlurXFilter.prototype=Object.create(i.AbstractFilter.prototype),i.BlurXFilter.prototype.constructor=i.BlurXFilter,Object.defineProperty(i.BlurXFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(t){this.dirty=!0,this.uniforms.blur.value=1/7e3*t}}),i.BlurYFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;","   gl_FragColor = sum;","}"]},i.BlurYFilter.prototype=Object.create(i.AbstractFilter.prototype),i.BlurYFilter.prototype.constructor=i.BlurYFilter,Object.defineProperty(i.BlurYFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(t){this.uniforms.blur.value=1/7e3*t}}),i.BlurFilter=function(){this.blurXFilter=new i.BlurXFilter,this.blurYFilter=new i.BlurYFilter,this.passes=[this.blurXFilter,this.blurYFilter]},Object.defineProperty(i.BlurFilter.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t}}),Object.defineProperty(i.BlurFilter.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t}}),Object.defineProperty(i.BlurFilter.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t}}),i.InvertFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={invert:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);","}"]},i.InvertFilter.prototype=Object.create(i.AbstractFilter.prototype),i.InvertFilter.prototype.constructor=i.InvertFilter,Object.defineProperty(i.InvertFilter.prototype,"invert",{get:function(){return this.uniforms.invert.value},set:function(t){this.uniforms.invert.value=t}}),i.SepiaFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={sepia:{type:"1f",value:1}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float sepia;","uniform sampler2D uSampler;","const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);","}"]},i.SepiaFilter.prototype=Object.create(i.AbstractFilter.prototype),i.SepiaFilter.prototype.constructor=i.SepiaFilter,Object.defineProperty(i.SepiaFilter.prototype,"sepia",{get:function(){return this.uniforms.sepia.value},set:function(t){this.uniforms.sepia.value=t}}),i.TwistFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={radius:{type:"1f",value:.5},angle:{type:"1f",value:5},offset:{type:"2f",value:{x:.5,y:.5}}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float radius;","uniform float angle;","uniform vec2 offset;","void main(void) {","   vec2 coord = vTextureCoord - offset;","   float distance = length(coord);","   if (distance < radius) {","       float ratio = (radius - distance) / radius;","       float angleMod = ratio * ratio * angle;","       float s = sin(angleMod);","       float c = cos(angleMod);","       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);","   }","   gl_FragColor = texture2D(uSampler, coord+offset);","}"]},i.TwistFilter.prototype=Object.create(i.AbstractFilter.prototype),i.TwistFilter.prototype.constructor=i.TwistFilter,Object.defineProperty(i.TwistFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value},set:function(t){this.dirty=!0,this.uniforms.offset.value=t}}),Object.defineProperty(i.TwistFilter.prototype,"radius",{get:function(){return this.uniforms.radius.value},set:function(t){this.dirty=!0,this.uniforms.radius.value=t}}),Object.defineProperty(i.TwistFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value},set:function(t){this.dirty=!0,this.uniforms.angle.value=t}}),i.ColorStepFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={step:{type:"1f",value:5}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float step;","void main(void) {","   vec4 color = texture2D(uSampler, vTextureCoord);","   color = floor(color * step) / step;","   gl_FragColor = color;","}"]},i.ColorStepFilter.prototype=Object.create(i.AbstractFilter.prototype),i.ColorStepFilter.prototype.constructor=i.ColorStepFilter,Object.defineProperty(i.ColorStepFilter.prototype,"step",{get:function(){return this.uniforms.step.value},set:function(t){this.uniforms.step.value=t}}),i.DotScreenFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float angle;","uniform float scale;","float pattern() {","   float s = sin(angle), c = cos(angle);","   vec2 tex = vTextureCoord * dimensions.xy;","   vec2 point = vec2(","       c * tex.x - s * tex.y,","       s * tex.x + c * tex.y","   ) * scale;","   return (sin(point.x) * sin(point.y)) * 4.0;","}","void main() {","   vec4 color = texture2D(uSampler, vTextureCoord);","   float average = (color.r + color.g + color.b) / 3.0;","   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);","}"]},i.DotScreenFilter.prototype=Object.create(i.AbstractFilter.prototype),i.DotScreenFilter.prototype.constructor=i.DotScreenFilter,Object.defineProperty(i.DotScreenFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value},set:function(t){this.dirty=!0,this.uniforms.scale.value=t}}),Object.defineProperty(i.DotScreenFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value},set:function(t){this.dirty=!0,this.uniforms.angle.value=t}}),i.CrossHatchFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={blur:{type:"1f",value:1/512}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);","    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);","    if (lum < 1.00) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.75) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.50) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.3) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","}"]},i.CrossHatchFilter.prototype=Object.create(i.AbstractFilter.prototype),i.CrossHatchFilter.prototype.constructor=i.BlurYFilter,Object.defineProperty(i.CrossHatchFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(t){this.uniforms.blur.value=1/7e3*t}}),i.RGBSplitFilter=function(){i.AbstractFilter.call(this),this.passes=[this],this.uniforms={red:{type:"2f",value:{x:20,y:20}},green:{type:"2f",value:{x:-20,y:20}},blue:{type:"2f",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}},this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 red;","uniform vec2 green;","uniform vec2 blue;","uniform vec4 dimensions;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;","   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;","   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;","   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;","}"]},i.RGBSplitFilter.prototype=Object.create(i.AbstractFilter.prototype),i.RGBSplitFilter.prototype.constructor=i.RGBSplitFilter,Object.defineProperty(i.RGBSplitFilter.prototype,"angle",{get:function(){return this.uniforms.blur.value/(1/7e3)},set:function(t){this.uniforms.blur.value=1/7e3*t}}),"undefined"!=typeof r?("undefined"!=typeof e&&e.exports&&(r=e.exports=i),r.PIXI=i):"undefined"!=typeof define&&define.amd?define(i):t.PIXI=i}).call(this)},{}],4:[function(t,e){function r(t,e,r,i){var n=r-t,o=i-e;return Math.sqrt(n*n+o*o)}var i=t("vecmath/lib/Vector2"),n=t("klasse"),o=t("interpolation").lerp,s=new i,a=new i,h=new n({initialize:function(){this.steps=1,this.points=[],this.approximateCurves=!0,this.approximationFactor=.5,this._move=new i,this._start=new i,this._hasMoved=!1,this._newPath=!0},reset:function(){this.points.length=0,this._newPath=!0,this._hasMoved=!1,this._move.x=this._move.y=0,this._start.x=this._start.y=0},beginPath:function(){this.reset()},moveTo:function(t,e){this._newPath=!0,this._move.x=t,this._move.y=e,this._start.x=t,this._start.y=e,this._hasMoved=!0},__newPoint:function(t,e){this.points.push(new i(t,e)),this._newPath=!1},closePath:function(t){0!==this.points.length&&this.lineTo(this._start.x,this._start.y,t)},lineTo:function(t,e,r){if(!this._hasMoved)return void this.moveTo(t,e);r=Math.max(1,r||this.steps);for(var i=0;r>=i;i++)if(this._newPath||0!=i){var n=i/r,s=o(this._move.x,t,n),a=o(this._move.y,e,n);this.__newPoint(s,a)}this._move.x=t,this._move.y=e},bezierCurveTo:function(t,e,i,n,o,s,a){this._hasMoved||this.moveTo(t,e);var h=this._move.x,l=this._move.y;if(!a)if(this.approximateCurves){var u=r(h,l,t,e),c=r(t,e,i,n),d=r(i,n,o,s);a=~~((u+c+d)*this.approximationFactor)}else a=Math.max(1,this.steps);for(var f=0;a>f;f++){var p=f/(a-1),g=1-p,v=g*g,m=v*g,x=p*p,y=x*p,b=m*h+3*v*p*t+3*g*x*i+y*o,T=m*l+3*v*p*e+3*g*x*n+y*s;this.__newPoint(b,T)}this._move.x=o,this._move.y=s},quadraticCurveTo:function(t,e,r,i,n){this._hasMoved||this.moveTo(t,e);var o=this._move.x,h=this._move.y;if(!n)if(this.approximateCurves){var l=s.set(o,h).distance(a.set(t,e)),u=s.set(t,e).distance(a.set(r,i));n=~~((l+u)*this.approximationFactor)}else n=Math.max(1,this.steps);for(var c=0;n>c;c++){var d=c/(n-1),f=1-d,p=f*f,g=d*d,v=p*o+2*f*d*t+g*r,m=p*h+2*f*d*e+g*i;this.__newPoint(v,m)}this._move.x=r,this._move.y=i},calculateBoundingBox:function(){for(var t=this.points,e=Number.MAX_VALUE,r=Number.MAX_VALUE,i=-Number.MAX_VALUE,n=-Number.MAX_VALUE,o=0;o<t.length;o++){var s=t[o];e=Math.min(e,s.x),r=Math.min(r,s.y),i=Math.max(i,s.x),n=Math.max(n,s.y)}return{x:e,y:r,width:i-e,height:n-r}},contains:function(t,e){var r=t,i=e;"object"==typeof t&&(r=t.x,i=t.y);var n,o,s=this.points,a=s.length,h=0;for(n=0,o=a-1;a>n;o=n++)s[n].y>i!=s[o].y>i&&r<(s[o].x-s[n].x)*(i-s[n].y)/(s[o].y-s[n].y)+s[n].x&&(h=!h);return h},simplify:function(t,e){var r=this.points,n=r.length,o=new i,s=t*t,a=new i(r[0]);e||(e=new h);var l=[];l.push(a);for(var u=1;n>u;u++)o=r[u],o.distanceSq(a)>s&&(l.push(new i(o)),a=o);return(a.x!==o.x||a.y!==o.y)&&l.push(new i(o)),e.points=l,e}});e.exports=h},{interpolation:5,klasse:6,"vecmath/lib/Vector2":7}],5:[function(t,e){e.exports.lerp=function(t,e,r){return t*(1-r)+e*r},e.exports.smoothstep=function(t,e,r){return r=Math.max(0,Math.min(1,(r-t)/(e-t))),r*r*(3-2*r)}},{}],6:[function(t,e){function r(t){return!!t.get&&"function"==typeof t.get||!!t.set&&"function"==typeof t.set}function i(t,e,i){var n=i?t[e]:Object.getOwnPropertyDescriptor(t,e);return!i&&n.value&&"object"==typeof n.value&&(n=n.value),n&&r(n)?("undefined"==typeof n.enumerable&&(n.enumerable=!0),"undefined"==typeof n.configurable&&(n.configurable=!0),n):!1}function n(t,e){var r=Object.getOwnPropertyDescriptor(t,e);return r?(r.value&&"object"==typeof r.value&&(r=r.value),r.configurable===!1?!0:!1):!1}function o(t,e,r,o){for(var s in e)if(e.hasOwnProperty(s)){var h=i(e,s,r);if(h!==!1){var l=o||t;if(n(l.prototype,s)){if(a.ignoreFinals)continue;throw new Error("cannot override final property '"+s+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,s,h)}else t.prototype[s]=e[s]}}function s(t,e){if(e){Array.isArray(e)||(e=[e]);for(var r=0;r<e.length;r++)o(t,e[r].prototype||e[r])}}function a(t){t||(t={});var e,r;if(t.initialize){if("function"!=typeof t.initialize)throw new Error("initialize must be a function");e=t.initialize,delete t.initialize}else if(t.Extends){var i=t.Extends;e=function(){i.apply(this,arguments)}}else e=function(){};t.Extends?(e.prototype=Object.create(t.Extends.prototype),e.prototype.constructor=e,r=t.Extends,delete t.Extends):e.prototype.constructor=e;var n=null;return t.Mixins&&(n=t.Mixins,delete t.Mixins),s(e,n),o(e,t,!0,r),e}a.extend=o,a.mixin=s,a.ignoreFinals=!1,e.exports=a},{}],7:[function(t,e){function r(t,e){"object"==typeof t?(this.x=t.x||0,this.y=t.y||0):(this.x=t||0,this.y=e||0)}var i=r.prototype;i.clone=function(){return new r(this.x,this.y)},i.copy=function(t){return this.x=t.x||0,this.y=t.y||0,this},i.set=function(t,e){return"object"==typeof t?(this.x=t.x||0,this.y=t.y||0):(this.x=t||0,this.y=e||0),this},i.add=function(t){return this.x+=t.x,this.y+=t.y,this},i.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},i.multiply=function(t){return this.x*=t.x,this.y*=t.y,this},i.scale=function(t){return this.x*=t,this.y*=t,this},i.divide=function(t){return this.x/=t.x,this.y/=t.y,this},i.negate=function(){return this.x=-this.x,this.y=-this.y,this},i.distance=function(t){var e=t.x-this.x,r=t.y-this.y;return Math.sqrt(e*e+r*r)},i.distanceSq=function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},i.length=function(){var t=this.x,e=this.y;return Math.sqrt(t*t+e*e)},i.lengthSq=function(){var t=this.x,e=this.y;return t*t+e*e},i.normalize=function(){var t=this.x,e=this.y,r=t*t+e*e;return r>0&&(r=1/Math.sqrt(r),this.x=t*r,this.y=e*r),this},i.dot=function(t){return this.x*t.x+this.y*t.y},i.cross=function(t){return this.x*t.y-this.y*t.x},i.lerp=function(t,e){var r=this.x,i=this.y;return e=e||0,this.x=r+e*(t.x-r),this.y=i+e*(t.y-i),this},i.transformMat3=function(t){var e=this.x,r=this.y,i=t.val;return this.x=i[0]*e+i[3]*r+i[6],this.y=i[1]*e+i[4]*r+i[7],this},i.transformMat4=function(t){var e=this.x,r=this.y,i=t.val;return this.x=i[0]*e+i[4]*r+i[12],this.y=i[1]*e+i[5]*r+i[13],this},i.reset=function(){return this.x=0,this.y=0,this},i.sub=i.subtract,i.mul=i.multiply,i.div=i.divide,i.dist=i.distance,i.distSq=i.distanceSq,i.len=i.length,i.lenSq=i.lengthSq,i.toString=function(){return"Vector2("+this.x+", "+this.y+")"},i.random=function(t){t=t||1;var e=2*Math.random()*Math.PI;return this.x=Math.cos(e)*t,this.y=Math.sin(e)*t,this},i.str=i.toString,e.exports=r},{}],8:[function(t,e,r){"use strict";r.intFromBoolean=function(t){return t?1:0},r.booleanFromInt=function(t){return null===t?!1:t>0}},{}],9:[function(t,e){"use strict";var r=t("../janicek/core"),i=r.def,n=function(t,e,o,s,a,h){var l={a:i(t,1),b:i(e,0),c:i(o,0),d:i(s,1),tx:i(a,0),ty:i(h,0),clone:function(){return n(l.a,l.b,l.c,l.d,l.tx,l.ty)},createGradientBox:function(t,e,i,n,o){if(l.a=t/1638.4,l.d=e/1638.4,r.isUndefinedOrNull(i)||0===i)l.b=l.c=0;else{var s=Math.cos(i),a=Math.sin(i);l.b=a*l.d,l.c=-a*l.a,l.a*=s,l.d*=s}l.tx=r.isUndefinedOrNull(n)?t/2:n+t/2,l.ty=r.isUndefinedOrNull(o)?e/2:o+e/2},setRotation:function(t,e){var i=r.isUndefinedOrNull(e)?1:e;l.a=Math.cos(t)*i,l.c=Math.sin(t)*i,l.b=-l.c,l.d=l.a},invert:function(){var t=l.a*l.d-l.b*l.c;if(0===t)l.a=l.b=l.c=l.d=0,l.tx=-l.tx,l.ty=-l.ty;else{t=1/t;var e=l.d*t;l.d=l.a*t,l.a=e,l.b*=-t,l.c*=-t;var r=-l.a*l.tx-l.c*l.ty;l.ty=-l.b*l.tx-l.d*l.ty,l.tx=r}return this},transformPoint:function(t){return{x:t.x*l.a+t.y*l.c+l.tx,y:t.x*l.b+t.y*l.d+l.ty}},translate:function(t,e){l.tx+=t,l.ty+=e},rotate:function(t){var e=Math.cos(t),r=Math.sin(t),i=l.a*e-l.b*r;l.b=l.a*r+l.b*e,l.a=i;var n=l.c*e-l.d*r;l.d=l.c*r+l.d*e,l.c=n;var o=l.tx*e-l.ty*r;l.ty=l.tx*r+l.ty*e,l.tx=o},scale:function(t,e){l.a*=t,l.b*=e,l.c*=t,l.d*=e,l.tx*=t,l.ty*=e},concat:function(t){var e=l.a*t.a+l.b*t.c;l.b=l.a*t.b+l.b*t.d,l.a=e;var r=l.c*t.a+l.d*t.c;l.d=l.c*t.b+l.d*t.d,l.c=r;var i=l.tx*t.a+l.ty*t.c+t.tx;l.ty=l.tx*t.b+l.ty*t.d+t.ty,l.tx=i},mult:function(t){var e=n();return e.a=l.a*t.a+l.b*t.c,e.b=l.a*t.b+l.b*t.d,e.c=l.c*t.a+l.d*t.c,e.d=l.c*t.b+l.d*t.d,e.tx=l.tx*t.a+l.ty*t.c+t.tx,e.ty=l.tx*t.b+l.ty*t.d+t.ty,e},identity:function(){l.a=1,l.b=0,l.c=0,l.d=1,l.tx=0,l.ty=0},toMozString:function(){var t="matrix(";return t+=l.a+", ",t+=l.b+", ",t+=l.c+", ",t+=l.d+", ",t+=l.tx+"px, ",t+=l.ty+"px)"},toString:function(){var t="matrix(";return t+=l.a+", ",t+=l.b+", ",t+=l.c+", ",t+=l.d+", ",t+=l.tx+", ",t+=l.ty+")"}};return l};e.exports=n},{"../janicek/core":20}],10:[function(t,e){"use strict";e.exports={distanceFromOrigin:function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},distance:function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},interpolate:function(t,e,r){return{x:(t.x-e.x)*r+e.x,y:(t.y-e.y)*r+e.y}},normalize:function(t,e){if(0===t.x&&0===t.y)t.x=e;else{var r=e/Math.sqrt(t.x*t.x+t.y*t.y);t.x*=r,t.y*=r}},add:function(t,e){return{x:e.x+t.x,y:e.y+t.y}},subtract:function(t,e){return{x:t.x-e.x,y:t.y-e.y}},hash:function(t){return t.x+","+t.y}}},{}],11:[function(t,e){"use strict";e.exports=function(t,e,r,i){return{x:t||0,y:e||0,width:r||0,height:i||0}},e.exports.core=function(t){return{left:function(){return t.x},right:function(){return t.x+t.width},top:function(){return t.y},bottom:function(){return t.y+t.height}}}},{}],12:[function(t,e){"use strict";var r=t("../janicek/core").def,i=function(t,e,i,n){this.w=r(n,0),this.x=r(t,0),this.y=r(e,0),this.z=r(i,0)},n=function(t,e,r,n){return new i(t,e,r,n)};i.prototype={getLength:function(){return Math.abs(n.distance(this,n()))},get length(){return this.getLength()},getLengthSquared:function(){return this.length*this.length},get lengthSquared(){return this.getLengthSquared()},add:function(t){return n(this.x+t.x,this.y+t.y,this.z+t.z)},clone:function(){return n(this.x,this.y,this.z,this.w)},crossProduct:function(t){return n(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x,1)},decrementBy:function(t){this.x-=t.x,this.y-=t.y,this.z-=t.z},dotProduct:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},equals:function(t,e){return e=r(e,!1),this.x===t.x&&this.y===t.y&&this.z===t.z&&(!e||this.w===t.w)},incrementBy:function(t){this.x+=t.x,this.y+=t.y,this.z+=t.z},nearEquals:function(t,e,i){return i=r(i,!1),Math.abs(this.x-t.x)<e&&Math.abs(this.y-t.y)<e&&Math.abs(this.z-t.z)<e&&(!i||Math.abs(this.w-t.w)<e)},negate:function(){this.x*=-1,this.y*=-1,this.z*=-1},normalize:function(){var t=this.length;return 0!==t&&(this.x/=t,this.y/=t,this.z/=t),t},project:function(){this.x/=this.w,this.y/=this.w,this.z/=this.w},scaleBy:function(t){this.x*=t,this.y*=t,this.z*=t},subtract:function(t){return n(this.x-t.x,this.y-t.y,this.z-t.z)},toString:function(){return"Vector3D("+this.x+", "+this.y+", "+this.z+")"}},n.angleBetween=function(t,e){var r=t.clone();r.normalize();var i=e.clone();return i.normalize(),Math.acos(r.dotProduct(i))},n.distance=function(t,e){var r=e.x-t.x,i=e.y-t.y,n=e.z-t.z;return Math.sqrt(r*r+i*i+n*n)},Object.defineProperties(n,{X_AXIS:{get:function(){return n(1,0,0)}}}),Object.defineProperties(n,{Y_AXIS:{get:function(){return n(0,1,0)}}}),Object.defineProperties(n,{Z_AXIS:{get:function(){return n(0,0,1)}}}),e.exports=n},{"../janicek/core":20}],13:[function(t){"use strict";function e(){return{width:p($(le).val()).parseInt(),height:p($(D).val()).parseInt()}}function r(){var t=$(G).val(),e=M.displayColors.OCEAN,r=M.displayColors.GRASSLAND;if($(U).is(":checked")){var i=e;e=r,r=i}var n=g.makeAverageThresholdImageData(g.getImageData(d),t,e,r),o=g.makeImageDataUrlFromImageData(n);$(N).attr("src",o)}function i(t){return p(t).isNumber()?p(t).parseInt():Math.abs(w.stringToSeed(t))}function n(){console.time("generate");var t=e(),r={map:null,noisyEdges:null,roads:null,watersheds:null,lava:null};r.map=x({width:t.width+0,height:t.height+0});var n=i($(J).val()),o=i($(te).val());switch($(W).val()){case"bitmap":var s=g.getImageData(d),a=g.makeAverageThresholdBitmap(s,p.parseInt($(G).val()));$(U).is(":checked")&&(a=g.invertBitmap(a)),r.map.newIsland(v.makeBitmap(a),n);break;case"blob":r.map.newIsland(v.makeBlob(),n);break;case"noise":r.map.newIsland(v.makeNoise(o),n);break;case"perlin":r.map.newIsland(v.makePerlin(o,$(H).val()),n);break;case"radial":r.map.newIsland(v.makeRadial(o,$(j).val()),n);break;case"square":r.map.newIsland(v.makeSquare(),n)}r.watersheds=L(),r.noisyEdges=b(),r.lava=m(),r.roads=A();
var h=function(t,e,r,i){
	switch(t){
		case"random":return T.generateRandom(e,r,i);
		case"relaxed":return T.generateRelaxed(e,r,i,$(Y).val());
		case"square":return T.generateSquare(e,r);
		case"hex":return T.generateHexagon(e,r);
		default:throw"unknown point selector "+t}}($("#pointSelection").val(),r.map.SIZE.width,r.map.SIZE.height,r.map.mapRandom.seed),l=$(X).val();l.length>0?y.tryMutateMapPointsToGetNumberLands(r.map,h,parseInt(l,10)):(r.map.go0PlacePoints($(z).val(),h),r.map.go1BuildGraph(),r.map.go2AssignElevations($(V).val())),r.map.go3AssignMoisture($(K).val()),r.map.go4DecorateMap();var u=$(Q).val().split(",");return r.roads.createRoads(r.map,u),r.watersheds.createWatersheds(r.map),r.noisyEdges.buildNoisyEdges(r.map,r.lava,n,$(B).val()),console.timeEnd("generate"),r}


function o(){
	var t=document.getElementById(F);
	if(null===t){
		t=document.createElement("canvas"),
		t.id=F;
		var r=e();
		t.width=5000//r.width,
		t.height=5000//r.height,
		document.body.insertBefore(t,document.getElementById("fieldset"))
	}
	return t.getContext("2d")
}
function s(){if(!ue){var t=e();ue={renderer:"pixi webgl"===$(ie).val()?new S.WebGLRenderer(t.width,t.height):new S.CanvasRenderer(t.width,t.height)};var r=ue.renderer.view;r.id=F,
document.body.insertBefore(r,document.getElementById("fieldset"))
}return ue}function a(){$(F).remove(),ue=null}function h(t,e,r){switch(r.graphicsReset(e,t.map.SIZE.width,t.map.SIZE.height,M.displayColors),$(re).val()){case"debug polygons":r.renderDebugPolygons(e,t.map,M.displayColors);break;case"smooth":r.renderPolygons(e,M.displayColors,null,_.colorWithSlope,t.map,t.noisyEdges),r.renderEdges(e,M.displayColors,t.map,t.noisyEdges,t.lava,$(se).is(":checked"))}$(oe).is(":checked")&&r.renderAllEdges(e,13684944,.25,t.map,t.noisyEdges),$(ae).is(":checked")&&r.renderRoads(e,t.map,t.roads,M.displayColors),$(ne).is(":checked")&&r.renderBridges(e,t.map,t.roads,M.displayColors),$(he).is(":checked")&&r.renderWatersheds(e,t.map,t.watersheds),$(I).is(":checked")&&r.addNoise(e,t.map.SIZE.width,t.map.SIZE.height)}function l(t){if(console.time("render"),"canvas"===$(ie).val())h(t,o(),E);else{h(t,s(),C);var e=s();e.renderer.render(e.stage)}console.timeEnd("render")}function u(){d=new Image,d.onload=function(){$(N).attr("src",d.src),r()},d.src="world-map.jpg",$(q).click(function(){$(J).val(String(w.makeRandomSeed()))}),$(Z).click(function(){$(te).val(String(w.makeRandomSeed()))}),$(W).change(function(){switch($([j,H,te,k,N,U,G].toString()).parent().hide(),$(W).val()){case"bitmap":$([k,N,U,G].toString()).parent().show();break;case"noise":$(te).parent().show();break;case"perlin":$([H,te].toString()).parent().show();break;case"radial":$([j,te].toString()).parent().show()}}),$(k).change(function(){console.log("file changed");var t=$(k).get()[0],e=t.files;if(1===e.length){var r=e[0];R(r.type).startsWith("image")&&g.loadFileIntoImage(r,d)}}),$([U,G].toString()).change(function(){r()}),0===$(le).val().length&&$(le).val($(window).width()),0===$(D).val().length&&$(D).val($(window).height()),$(ie).change(a),$(re).change(function(){switch($(re).val()){case"debug polygons":$(I).removeAttr("checked");break;case"smooth":$(I).attr("checked","true")}}),$([ie,re,se,ae,ne,he,oe,I].toString()).change(function(){l(f)}),$(ae).change(function(){$(Q).parent().toggle()}),$(O).click(function(){f=n(),l(f)}),$(ee).click(function(){var t=$(P);
	t.toggle(5000,function(){$(ee).text(t.is(":visible")?"hide":"show")})})}function c(){console.time("total"),u(),f=n(),l(f),console.timeEnd("total")}var d,f,p=t("lodash"),g=t("./janicek/canvas"),v=(t("./janicek/html-color"),t("./island-shape")),m=t("./lava"),x=t("./map"),y=t("./map-lands"),b=t("./noisy-edges"),T=t("./point-selector"),S=t("pixi.js"),w=t("./janicek/pseudo-random-number-generators"),E=t("./render-canvas"),_=t("./render-core"),C=t("./render-pixi"),A=t("./roads"),R=t("./janicek/string"),M=t("./style"),L=t("./watersheds"),F="canvas",I="#addNoise",B="#edgeNoise",P="#fields",O="#generate",D="#height",k="#imageFile",G="#imageThreshold",N="#imageThumb",U="#invertImage",j="#islandFactor",W="#islandShape",V="#lakeThreshold",Y="#lloydIterations",X="#numberOfLands",z="#numberOfPoints",H="#oceanRatio",q="#random",K="#riverChance",Q="#roadElevationThresholds",J="#seed",Z="#shapeRandom",te="#shapeSeed",ee="#toggle",re="#view",ie="#renderer",ne="#viewBridges",oe="#viewEdges",se="#viewRivers",ae="#viewRoads",he="#viewWatersheds",le="#width",ue=null;
c()},{"./island-shape":17,"./janicek/canvas":19,"./janicek/html-color":22,"./janicek/pseudo-random-number-generators":25,"./janicek/string":26,"./lava":27,"./map":29,"./map-lands":28,"./noisy-edges":49,"./point-selector":50,"./render-canvas":52,"./render-core":53,"./render-pixi":54,"./roads":55,"./style":56,"./watersheds":57,lodash:1,"pixi.js":3}],14:[function(t,e){"use strict";e.exports=function(){return{index:null,point:null,water:null,ocean:null,coast:null,border:null,biome:null,elevation:null,moisture:null,neighbors:null,borders:null,corners:null}}},{}],15:[function(t,e){"use strict";e.exports=function(){return{index:null,point:null,ocean:null,water:null,coast:null,border:null,elevation:null,moisture:null,touches:null,protrudes:null,adjacent:null,river:null,downslope:null,watershed:null,watershedSize:null}}},{}],16:[function(t,e){"use strict";e.exports=function(){return{index:0,d0:null,d1:null,v0:null,v1:null,midpoint:null,river:0}}},{}],17:[function(t,e,r){"use strict";var i=t("./janicek/array2d"),n=t("./janicek/core"),o=t("./as3/point-core").distanceFromOrigin,s=t("./janicek/perlin-noise"),a=t("./polygonal/pm-prng"),h=t("./janicek/pseudo-random-number-generators");r.makeRadial=function(t,e){function r(t){var r=Math.atan2(t.y,t.x),i=.5*(Math.max(Math.abs(t.x),Math.abs(t.y))+o(t)),n=.5+.4*Math.sin(h+s*r+Math.cos((s+3)*r)),a=.7-.2*Math.sin(h+s*r-Math.sin((s+2)*r));return(Math.abs(r-l)<u||Math.abs(r-l+2*Math.PI)<u||Math.abs(r-l-2*Math.PI)<u)&&(n=a=.2),n>i||i>n*e&&a>i}e=n.def(e,1.07);var i=a();i.seed=t;var s=i.nextIntRange(1,6),h=i.nextDoubleRange(0,2*Math.PI),l=i.nextDoubleRange(0,2*Math.PI),u=i.nextDoubleRange(.2,.7);return r},r.makePerlin=function(t,e){e=n.def(e,.5);var r=.1,a=.5;e=(a-r)*e+r;var h=i(s.makePerlinNoise(256,256,1,1,1,t,8));return function(t){var r=(255&h.get(n.toInt(128*(t.x+1)),n.toInt(128*(t.y+1))))/255;return r>e+e*o(t)*o(t)}},r.makeSquare=function(){return function(){return!0}},r.makeBlob=function(){return function(t){var e=o({x:t.x-.2,y:t.y/2+.2})<.05,r=o({x:t.x+.2,y:t.y/2+.2})<.05,i=o(t)<.8-.18*Math.sin(5*Math.atan2(t.y,t.x));return i&&!e&&!r}},r.makeBitmap=function(t){t=i(t);var e=t.dimensions();return function(r){var i=n.toInt((r.x+1)/2*e.x),o=n.toInt((r.y+1)/2*e.y);return t.get(i,o)}},r.makeNoise=function(t){return function(){return t=h.nextParkMiller(t),h.toBool(t)}}},{"./as3/point-core":10,"./janicek/array2d":18,"./janicek/core":20,"./janicek/perlin-noise":24,"./janicek/pseudo-random-number-generators":25,"./polygonal/pm-prng":51}],18:[function(t,e){"use strict";var r=t("./core"),i=t("lodash");e.exports=function(t){return t=r.def(t,[]),{value:t,get:function(e,r){return i(t[r]).isUndefined()?null:t[r][e]},set:function(e,i,n){return t[i]=r.def(t[i],[]),t[i][e]=n,t},foreachY:function(e){i(t).each(function(t){i(t).isUndefined()||e(t)})},foreachXY:function(e){var r;for(r=0;r<t.length;r++)if(!i(t[r]).isUndefined()){var n;for(n=0;n<t[r].length;n++)if(!i(t[r][n]).isUndefined()){var o=t[r][n];null!==o&&e(n,r,o)}}},any:function(e){var r;for(r=0;r<t.length;r++)if(!i(t[r]).isUndefined()){var n;for(n=0;n<t[r].length;n++)if(!i(t[r][n]).isUndefined()){var o=t[r][n];if(null!==o&&e(o))return{x:n,y:r}}}return null},dimensions:function(){var e=t.length,r=0;return this.foreachY(function(t){r=Math.max(r,t.length)}),{x:r,y:e}}}},e.exports.getIndices=function(t,e,i){return i=i||1,{x:t/i%e,y:r.toInt(t/i/e)}}},{"./core":20,lodash:1}],19:[function(t,e,r){"use strict";var i=t("./array2d"),n=t("./core"),o=t("./html-color"),s=t("./math"),a=t("./pseudo-random-number-generators"),h=4,l=0,u=1,c=2,d=3;r.renderCanvasPixelArray=function(t,e){for(var r,i=t.data,o=0;o<n.toInt(i.length/h);o++){r=o*h;var s=e(r,i[r+l],i[r+u],i[r+c],i[r+d]);null!==s&&(null!==s.red&&(i[r+l]=s.red),null!==s.green&&(i[r+u]=s.green),null!==s.blue&&(i[r+c]=s.blue),null!==s.alpha&&(i[r+d]=s.alpha))}},r.addNoise=function(t,e,i,o,h,l,u,c){o=n.def(o,!1),h=n.def(h,!0),l=n.def(l,!0),u=n.def(u,!0),c=n.def(c,!1);var d=a.randomGenerator(e,a.nextParkMiller);i=s.clamp(i,1,255);var f;return r.renderCanvasPixelArray(t,function(t,e,r,n,s){f=a.toIntRange(d(),-i,i);var p={red:null,green:null,blue:null,alpha:null};return h&&(p.red=e+f),l&&(p.green=r+(o?f:a.toIntRange(d(),-i,i))),u&&(p.blue=n+(o?f:a.toIntRange(d(),-i,i))),c&&(p.alpha=s+a.toIntRange(d(),-i,i)),p}),t},
r.addNoiseToCanvas=function(t,e,i,o,s,a,h,l){
	o=n.def(o,!1),
	s=n.def(s,!0),
	a=n.def(a,!0),
	h=n.def(h,!0),
	l=n.def(l,!1);
	var u=t.getImageData(0,0,t.canvas.width,t.canvas.height);
	u=r.addNoise(u,e,i,o,s,a,h,l),
	t.putImageData(u,0,0)
},
r.loadFileIntoImage=function(t,e){
	var r=new FileReader;
	r.onload=function(t){
		e.src=t.target.result
	},
	r.readAsDataURL(t)
},
r.getImageData=function(t){
	var e=document.createElement("canvas");
	e.width=t.width,
	e.height=t.height;
	var r=e.getContext("2d");
	r.drawImage(t,0,0);

	var i=r.getImageData(0,0,e.width,e.height);
	
	return i
},
r.makeImageDataUrlFromImageData=function(t){
	var e=document.createElement("canvas");
	return e.width=t.width,
	e.height=t.height,
	e.getContext("2d").putImageData(t,0,0),
	e.toDataURL()
},
r.makeAverageThresholdImageData=function(t,e,i,a,h){
	h=n.def(h,1);
	var l=o.colorFraction(h);
	return r.renderCanvasPixelArray(t,function(t,r,n,h){
		var u=s.average([r,n,h])>=e?a:i;
		return{
			red:o.getRedComponent(u),
			green:o.getGreenComponent(u),
			blue:o.getBlueComponent(u),
			alpha:l
		}
	}),t
},
r.makeAverageThresholdBitmap=function(t,e){
	return e=s.clamp(e,0,255),
	r.makeBitmap(t,function(t,r,i){
		return s.average([t,r,i])>=e
	})
},
r.makeBitmap=function(t,e){
	var o=i([]),
	s=n.toInt(t.width);
	return r.renderCanvasPixelArray(t,function(t,r,n,a,l){
		var u=i.getIndices(t,s,h);
		return o.set(u.x,u.y,e(r,n,a,l)),null
	}),
	o.value
},
r.invertBitmap=function(t){
	var e=i(t);
	return e.foreachXY(function(t,r,i){
		e.set(t,r,!i)
	}),
	e.value
}
},
{
	"./array2d":18,
	"./core":20,
	"./html-color":22,
	"./math":23,
	"./pseudo-random-number-generators":25
}],
20:[
function(t,e){
	"use strict";
	var r=t("lodash");
	e.exports={
		def:function(t,e){
			return r.isUndefined(t)?e:t
		},
		toInt:function(t){
			return 0|t
		},
		coalesce:function(){
			return r.find(arguments,function(t){
				return!r.isNull(t)&&!r.isUndefined(t)
			})
		},
		isUndefinedOrNull:function(t){
			return r.isUndefined(t)||r.isNull(t)
		}
	}
},
{lodash:1}
],
21:[
function(t,e,r){
	"use strict";
	r.djb2=function(t){
		var e,r=5381;
		for(e=0;e<t.length;e++)r=(r<<5)+r+t.charCodeAt(e);
			return r
	},
	r.sdbm=function(t){
		var e,r=0;
		for(e=0;e<t.length;e++)
			r=t.charCodeAt(e)+(r<<6)+(r<<16)-r;
		return r
	},
	r.javaHashCode=function(t){
		var e=0;
		if(0===t.length)
			return e;
		for(var r=0;r<t.length;r++)
			e=(e<<5)-e+t.charCodeAt(r),
		e&=e;
		return e
	}
},
{}
],
22:[
function(t,e,r){
	"use strict";
	var i=t("./core");
	r.MAX_COLOR_COMPONENT=255,
	r.getRedComponent=function(t){
		return t>>16&255
	},
	r.getGreenComponent=function(t){
		return t>>8&255
	},
	r.getBlueComponent=function(t){
		return 255&t
	},
	r.interpolateColor=function(t,e,r){
		var n=i.toInt((1-r)*(t>>16)+r*(e>>16)),
		o=i.toInt((1-r)*(t>>8&255)+r*(e>>8&255)),
		s=i.toInt((1-r)*(255&t)+r*(255&e));
		return n>255&&(n=255),
		o>255&&(o=255),
		s>255&&(s=255),
		n<<16|o<<8|s
	},
	r.colorFraction=function(t){
		return i.toInt(r.MAX_COLOR_COMPONENT*t)
	},
	r.intToHexColor=function(t){
		return"#"+("00000"+t.toString(16).toUpperCase()).substr(-6)
	},
	r.rgb=function(t,e,r){
		return"rgb("+t+","+e+","+r+")"
	},
	r.rgba=function(t,e,r,i){
		return"rgba("+t+","+e+","+r+","+i+")"
	},
	r.rgbF=function(t,e,r){
		return"rgb("+100*t+"%,"+100*e+"%,"+100*r+"%)"
	},
	r.rgbaF=function(t,e,r,i){
		return"rgba("+100*t+"%,"+100*e+"%,"+100*r+"%,"+i+")"
	},
	r.hsl=function(t,e,r){
		return"hsl("+t+","+100*e+"%,"+100*r+"%)"
	},
	r.hsla=function(t,e,r,i){
		return"hsla("+t+","+100*e+"%,"+100*r+"%,"+i+")"
	}
},
{"./core":20}
],
23:[
function(t,e,r){
	"use strict";
	var i=t("lodash");
	r.average=function(t){
		return i.reduce(t,function(t,e){
			return t+e
		})/i.size(t)
	},
	r.clamp=function(t,e,r){
		var i=Math.min(e,r),
		n=Math.max(e,r);
		return i>t?i:t>n?n:t
	}
},
{lodash:1}
],
24:[function(t,e,r){"use strict";var i=t("./array2d"),n=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];r.makePerlinNoise=function(t,e,r,o,s,a,h,l){a=a||666,h=h||4,l=l||.5;var u,c,d,f=1/64,p=a=16807*a%2147483647,g=a=16807*a%2147483647,v=a=16807*a%2147483647,m=[],x=[],y=0;for(d=0;h>d;d++)u=Math.pow(2,d),c=Math.pow(l,d),y+=c,m.push(u),x.push(c);y=1/y;var b=i([]),T=r*f+p;o=o*f+g,s=s*f+v;var S;for(S=0;e>S;S++){r=T;var w;for(w=0;t>w;w++){var E=0;for(d=0;h>d;d++){var _=m[d],C=x[d],A=r*_,R=o*_,M=s*_,L=A-A%1,F=R-R%1,I=M-M%1,B=255&L,P=255&F,O=255&I;A-=L,R-=F,M-=I;var D=A*A*A*(A*(6*A-15)+10),k=R*R*R*(R*(6*R-15)+10),G=M*M*M*(M*(6*M-15)+10),N=n[B]+P,U=n[N]+O,j=n[N+1]+O,W=n[B+1]+P,V=n[W]+O,Y=n[W+1]+O,X=A-1,z=R-1,H=M-1,q=15&n[Y+1],$=(0===(1&q)?8>q?X:z:8>q?-X:-z)+(0===(2&q)?4>q?z:12===q?X:H:4>q?-z:14===q?-X:-H);q=15&n[j+1];var K=(0===(1&q)?8>q?A:z:8>q?-A:-z)+(0===(2&q)?4>q?z:12===q?A:H:4>q?-z:14===q?-A:-H);q=15&n[V+1];var Q=(0===(1&q)?8>q?X:R:8>q?-X:-R)+(0===(2&q)?4>q?R:12===q?X:H:4>q?-R:14===q?-X:-H);q=15&n[U+1];var J=(0===(1&q)?8>q?A:R:8>q?-A:-R)+(0===(2&q)?4>q?R:12===q?A:H:4>q?-R:14===q?-A:-H);q=15&n[Y];var Z=(0===(1&q)?8>q?X:z:8>q?-X:-z)+(0===(2&q)?4>q?z:12===q?X:M:4>q?-z:14===q?-X:-M);q=15&n[j];var te=(0===(1&q)?8>q?A:z:8>q?-A:-z)+(0===(2&q)?4>q?z:12===q?A:M:4>q?-z:14===q?-A:-M);q=15&n[V];var ee=(0===(1&q)?8>q?X:R:8>q?-X:-R)+(0===(2&q)?4>q?R:12===q?X:M:4>q?-R:14===q?-X:-M);q=15&n[U];var re=(0===(1&q)?8>q?A:R:8>q?-A:-R)+(0===(2&q)?4>q?R:12===q?A:M:4>q?-R:14===q?-A:-M);K+=D*($-K),J+=D*(Q-J),te+=D*(Z-te),re+=D*(ee-re),J+=k*(K-J),re+=k*(te-re),E+=(re+G*(J-re))*C}var ie=128*(E*y+1);b.set(w,S,4278190080|ie<<16|ie<<8|ie),r+=f}o+=f}return b.value}},{"./array2d":18}],25:[function(t,e,r){"use strict";var i=t("./hash"),n=2147483647,o=16807;r.makeRandomSeed=function(){return Math.floor(Math.random()*n)},r.nextParkMiller=function(t){return t*o%n},r.nextParkMiller31=function(t){var e=16807*(65535&t),r=16807*(t>>>16);return e+=(32767&r)<<16,e+=r>>>15,e>2147483647&&(e-=2147483647),e},r.nextLCG=function(t){return(1103515245*t+12345)%n},r.toFloat=function(t){return t/n},r.toBool=function(t){return r.toFloat(t)>.5},r.toFloatRange=function(t,e,i){return e+(i-e)*r.toFloat(t)},r.toIntRange=function(t,e,i){return Math.round(e-.4999+(i+.4999-(e-.4999))*r.toFloat(t))},r.stringToSeed=function(t){return i.djb2(t)%n},r.randomGenerator=function(t,e){return function(){return t=e(t)}}},{"./hash":21}],26:[function(t,e){"use strict";e.exports=function(t){return{startsWith:function(e){return 0===t.indexOf(e)}}}},{}],27:[function(t,e,r){"use strict";var i=t("lodash"),n=t("./as3/conversion-core");e.exports=function(){return{lava:[],createLava:function(t,e){i(t.edges).each(function(t){!n.booleanFromInt(t.river)&&!t.d0.water&&!t.d1.water&&t.d0.elevation>.8&&t.d1.elevation>.8&&t.d0.moisture<.3&&t.d1.moisture<.3&&e()<r.FRACTION_LAVA_FISSURES&&(this.lava[t.index]=!0)})}}},e.exports.FRACTION_LAVA_FISSURES=.2},{"./as3/conversion-core":8,lodash:1}],28:[function(t,e){"use strict";var r=t("lodash"),i=t("./map"),n={};n.countLands=function(t){return r(r(t).filter(function(t){return!t.water})).size()},n.tryMutateMapPointsToGetNumberLands=function(t,e,o,s){s=r.defaults(s||{},{timeoutMilliseconds:1e4,initialNumberOfPoints:o,lakeThreshold:i.DEFAULT_LAKE_THRESHOLD});var a=s.initialNumberOfPoints,h=Date.now(),l=!1;do{t.go0PlacePoints(a,e),t.go1BuildGraph(),t.go2AssignElevations(s.lakeThreshold);var u=n.countLands(t.centers);u===o?l=!0:a+=o>u?1:-1}while(!l&&Date.now()-h<s.timeoutMilliseconds);return t},e.exports=n},{"./map":29,lodash:1}],29:[function(t,e){"use strict";var r=t("lodash"),i=t("./graph/center"),n=t("./as3/conversion-core"),o=t("./janicek/core"),s=t("./graph/corner"),a=t("./graph/edge"),h=t("./as3/point-core"),l=t("./point-selector"),u=t("./polygonal/pm-prng"),c=t("./as3/rectangle"),d=t("./nodename/delaunay/voronoi"),f=function(t){var e={};return e.SIZE=t,e.islandShape=null,e.mapRandom=u(),e.needsMoreRandomness,e.points=[],e.centers=[],e.corners=[],e.edges=[],e.newIsland=function(t,r){e.islandShape=t,e.mapRandom.seed=r},e.go0PlacePoints=function(t,r){e.needsMoreRandomness=l.needsMoreRandomness(r),t=o.def(t,f.DEFAULT_NUMBER_OF_POINTS),e.reset(),e.points=r(t)},e.go1BuildGraph=function(){var t=d.make(e.points,null,c(0,0,e.SIZE.width,e.SIZE.height));e.buildGraph(e.points,t),e.improveCorners(),t.dispose(),t=null,e.points=null},e.go2AssignElevations=function(t){t=o.def(t,f.DEFAULT_LAKE_THRESHOLD),e.assignCornerElevations(),e.assignOceanCoastAndLand(t),e.redistributeElevations(e.landCorners(e.corners)),r(e.corners).each(function(t){(t.ocean||t.coast)&&(t.elevation=0)}),e.assignPolygonElevations()},e.go3AssignMoisture=function(t){t=o.def(t,null),e.calculateDownslopes(),e.calculateWatersheds(),e.createRivers(t),e.assignCornerMoisture(),e.redistributeMoisture(e.landCorners(e.corners)),e.assignPolygonMoisture()},e.go4DecorateMap=function(){e.assignBiomes()},e.reset=function(){null!==e.points&&e.points.splice(0,e.points.length),null!==e.edges&&(r(e.edges).each(function(t){t.d0=t.d1=null,t.v0=t.v1=null}),e.edges.splice(0,e.edges.length)),null!==e.centers&&(r(e.centers).each(function(t){t.neighbors.splice(0,t.neighbors.length),t.corners.splice(0,t.corners.length),t.borders.splice(0,t.borders.length)}),e.centers.splice(0,e.centers.length)),null!==e.corners&&(r(e.corners).each(function(t){t.adjacent.splice(0,t.adjacent.length),t.touches.splice(0,t.touches.length),t.protrudes.splice(0,t.protrudes.length),t.downslope=null,t.watershed=null}),e.corners.splice(0,e.corners.length)),null===e.points&&(e.points=[]),null===e.edges&&(e.edges=[]),null===e.centers&&(e.centers=[]),null===e.corners&&(e.corners=[])},e.improveCorners=function(){var t,i,n=[];for(r(e.corners).each(function(e){e.border?n[e.index]=e.point:(t={x:0,y:0},r(e.touches).each(function(e){t.x+=e.point.x,t.y+=e.point.y}),t.x/=e.touches.length,t.y/=e.touches.length,n[e.index]=t)}),i=0;i<e.corners.length;i++)e.corners[i].point=n[i];r(e.edges).each(function(t){null!==t.v0&&null!==t.v1&&(t.midpoint=h.interpolate(t.v0.point,t.v1.point,.5))})},e.landCorners=function(t){var e=[];return r(t).each(function(t){t.ocean||t.coast||e.push(t)}),e},e.buildGraph=function(t,n){function l(t){var r;if(null===t)return null;var i;for(i=o.toInt(t.x)-1;i<o.toInt(t.x)+2;i++)if(!o.isUndefinedOrNull(g[i]))for(var n=0;n<g[i].length;n++){r=g[i][n];var a=t.x-r.point.x,h=t.y-r.point.y;if(1e-6>a*a+h*h)return r}return i=o.toInt(t.x),o.isUndefinedOrNull(g[i])&&(g[i]=[]),r=s(),r.index=e.corners.length,e.corners.push(r),r.point=t,r.border=0===t.x||t.x===e.SIZE.width||0===t.y||t.y===e.SIZE.height,r.touches=[],r.protrudes=[],r.adjacent=[],g[i].push(r),r}function u(t,e){null!==e&&t.indexOf(e)<0&&t.push(e)}function c(t,e){null!==e&&t.indexOf(e)<0&&t.push(e)}var d,f=n.edges(),p={};r(t).each(function(t){d=i(),d.index=e.centers.length,d.point=t,d.neighbors=[],d.borders=[],d.corners=[],e.centers.push(d),p[h.hash(t)]=d}),r(e.centers).each(function(t){n.region(t.point)});var g=[];r(f).each(function(t){var r=t.delaunayLine(),i=t.voronoiEdge(),n=a();n.index=e.edges.length,n.river=0,e.edges.push(n),n.midpoint=null!==i.p0&&null!==i.p1?h.interpolate(i.p0,i.p1,.5):null,n.v0=l(i.p0),n.v1=l(i.p1),n.d0=p[h.hash(r.p0)],n.d1=p[h.hash(r.p1)],null!==n.d0&&n.d0.borders.push(n),null!==n.d1&&n.d1.borders.push(n),null!==n.v0&&n.v0.protrudes.push(n),null!==n.v1&&n.v1.protrudes.push(n),null!==n.d0&&null!==n.d1&&(c(n.d0.neighbors,n.d1),c(n.d1.neighbors,n.d0)),null!==n.v0&&null!==n.v1&&(u(n.v0.adjacent,n.v1),u(n.v1.adjacent,n.v0)),null!==n.d0&&(u(n.d0.corners,n.v0),u(n.d0.corners,n.v1)),null!==n.d1&&(u(n.d1.corners,n.v0),u(n.d1.corners,n.v1)),null!==n.v0&&(c(n.v0.touches,n.d0),c(n.v0.touches,n.d1)),null!==n.v1&&(c(n.v1.touches,n.d0),c(n.v1.touches,n.d1))})},e.assignCornerElevations=function(){var t=[];for(r(e.corners).each(function(t){t.water=!e.inside(t.point)}),r(e.corners).each(function(e){e.border?(e.elevation=0,t.push(e)):e.elevation=Number.POSITIVE_INFINITY});t.length>0;)for(var i=t.shift(),n=0;n<i.adjacent.length;n++){var o=i.adjacent[n],s=.01+i.elevation;i.water||o.water||(s+=1,e.needsMoreRandomness&&(s+=e.mapRandom.nextDouble())),s<o.elevation&&(o.elevation=s,t.push(o))}},e.redistributeElevations=function(t){var e,r,i,n=1.1;for(t.sort(function(t,e){return t.elevation>e.elevation?1:t.elevation<e.elevation?-1:t.index>e.index?1:t.index<e.index?-1:0}),e=0;e<t.length;e++)r=e/(t.length-1),i=Math.sqrt(n)-Math.sqrt(n*(1-r)),i>1&&(i=1),t[e].elevation=i},e.redistributeMoisture=function(t){var e;for(t.sort(function(t,e){return t.moisture>e.moisture?1:t.moisture<e.moisture?-1:t.index>e.index?1:t.index<e.index?-1:0}),e=0;e<t.length;e++)t[e].moisture=e/(t.length-1)},e.assignOceanCoastAndLand=function(t){var i,o,s=[];for(r(e.centers).each(function(e){o=0,r(e.corners).each(function(t){t.border&&(e.border=!0,e.ocean=!0,t.water=!0,s.push(e)),t.water&&(o+=1)}),e.water=e.ocean||o>=e.corners.length*t});s.length>0;){i=s.shift();for(var a=0;a<i.neighbors.length;a++){var h=i.neighbors[a];h.water&&!h.ocean&&(h.ocean=!0,s.push(h))}}r(e.centers).each(function(t){var e=0,i=0;r(t.neighbors).each(function(t){e+=n.intFromBoolean(t.ocean),i+=n.intFromBoolean(!t.water)}),t.coast=e>0&&i>0}),r(e.corners).each(function(t){var e=0,i=0;r(t.touches).each(function(t){e+=n.intFromBoolean(t.ocean),i+=n.intFromBoolean(!t.water)}),t.ocean=e===t.touches.length,t.coast=e>0&&i>0,t.water=t.border||i!==t.touches.length&&!t.coast})},e.assignPolygonElevations=function(){var t;r(e.centers).each(function(e){t=0,r(e.corners).each(function(e){t+=e.elevation}),e.elevation=t/e.corners.length})},e.calculateDownslopes=function(){var t;r(e.corners).each(function(e){t=e,r(e.adjacent).each(function(e){e.elevation<=t.elevation&&(t=e)}),e.downslope=t})},e.calculateWatersheds=function(){var t,i,n;r(e.corners).each(function(t){t.watershed=t,t.ocean||t.coast||(t.watershed=t.downslope)});var o,s;for(i=0;100>i;i++){for(n=!1,o=0;o<e.corners.length;o++)s=e.corners[o],s.ocean||s.coast||s.watershed.coast||(t=s.downslope.watershed,t.ocean||(s.watershed=t),n=!0);if(!n)break}for(o=0;o<e.corners.length;o++)s=e.corners[o],t=s.watershed,t.watershedSize=1+(t.watershedSize||0)},e.createRivers=function(t){t=o.coalesce(t,o.toInt((e.SIZE.width+e.SIZE.height)/4));var r,i,n;for(r=0;t>r;r++)if(i=e.corners[e.mapRandom.nextIntRange(0,e.corners.length-1)],!(i.ocean||i.elevation<.3||i.elevation>.9))for(;!i.coast&&i!==i.downslope;)n=e.lookupEdgeFromCorner(i,i.downslope),n.river=n.river+1,i.river=(i.river||0)+1,i.downslope.river=(i.downslope.river||0)+1,i=i.downslope},e.assignCornerMoisture=function(){var t,i,n=[];for(r(e.corners).each(function(t){(t.water||t.river>0)&&!t.ocean?(t.moisture=t.river>0?Math.min(3,.2*t.river):1,n.push(t)):t.moisture=0});n.length>0;){t=n.shift();for(var o=0;o<t.adjacent.length;o++){var s=t.adjacent[o];i=.9*t.moisture,i>s.moisture&&(s.moisture=i,n.push(s))}}r(e.corners).each(function(t){(t.ocean||t.coast)&&(t.moisture=1)})},e.assignPolygonMoisture=function(){var t;r(e.centers).each(function(e){t=0,r(e.corners).each(function(e){e.moisture>1&&(e.moisture=1),t+=e.moisture}),e.moisture=t/e.corners.length})},e.assignBiomes=function(){r(e.centers).each(function(t){t.biome=f.getBiome(t)})},e.lookupEdgeFromCenter=function(t,e){for(var r=0;r<t.borders.length;r++){var i=t.borders[r];if(i.d0===e||i.d1===e)return i}return null},e.lookupEdgeFromCorner=function(t,e){for(var r=0;r<t.protrudes.length;r++){var i=t.protrudes[r];if(i.v0===e||i.v1===e)return i}return null},e.inside=function(t){return e.islandShape({x:2*(t.x/e.SIZE.width-.5),y:2*(t.y/e.SIZE.height-.5)})},e.reset(),e};f.DEFAULT_LAKE_THRESHOLD=.3,f.DEFAULT_LLOYD_ITERATIONS=2,f.DEFAULT_NUMBER_OF_POINTS=1e3,f.getBiome=function(t){return t.ocean?"OCEAN":t.water?t.elevation<.1?"MARSH":t.elevation>.8?"ICE":"LAKE":t.coast?"BEACH":t.elevation>.8?t.moisture>.5?"SNOW":t.moisture>.33?"TUNDRA":t.moisture>.16?"BARE":"SCORCHED":t.elevation>.6?t.moisture>.66?"TAIGA":t.moisture>.33?"SHRUBLAND":"TEMPERATE_DESERT":t.elevation>.3?t.moisture>.83?"TEMPERATE_RAIN_FOREST":t.moisture>.5?"TEMPERATE_DECIDUOUS_FOREST":t.moisture>.16?"GRASSLAND":"TEMPERATE_DESERT":t.moisture>.66?"TROPICAL_RAIN_FOREST":t.moisture>.33?"TROPICAL_SEASONAL_FOREST":t.moisture>.16?"GRASSLAND":"SUBTROPICAL_DESERT"},e.exports=f},{"./as3/conversion-core":8,"./as3/point-core":10,"./as3/rectangle":11,"./graph/center":14,"./graph/corner":15,"./graph/edge":16,"./janicek/core":20,"./nodename/delaunay/voronoi":44,"./point-selector":50,"./polygonal/pm-prng":51,lodash:1}],30:[function(t,e){"use strict";e.exports={TOP:1,BOTTOM:2,LEFT:4,RIGHT:8,check:function(e,r){r=t("../../as3/rectangle").core(r);var i=0;return e.x===r.left()&&(i|=this.LEFT),e.x===r.right()&&(i|=this.RIGHT),e.y===r.top()&&(i|=this.TOP),e.y===r.bottom()&&(i|=this.BOTTOM),i}}},{"../../as3/rectangle":11}],31:[function(t,e){"use strict";e.exports={vertex:"vertex",site:"site"}},{}],32:[function(t,e){"use strict";var r=t("lodash");e.exports={delaunayLinesForEdges:function(t){var e=[];return r(t).each(function(t){e.push(t.delaunayLine())}),e},selectEdgesForSitePoint:function(t,e){return r(e).filter(function(e){return null!==e.leftSite&&e.leftSite.coord===t||null!==e.rightSite&&e.rightSite.coord===t})},selectNonIntersectingEdges:function(t,e){if(null===t)return e;var i={x:0,y:0};return r(e).filter(function(e){var r=e.makeDelaunayLineBmp(),n=!t.hitTest(i,1,r,i,1);return r.dispose(),n})},visibleLineSegments:function(e){var i=t("./lr"),n=t("../geom/line-segment"),o=[];return r(e).each(function(t){if(t.visible){var e=t.clippedEnds[i.LEFT],r=t.clippedEnds[i.RIGHT];o.push(n(e,r))}}),o}}},{"../geom/line-segment":46,"./lr":39,lodash:1}],33:[function(t,e){"use strict";var r=t("./halfedge"),i=t("./edge");e.exports=function(t,e,n){function o(t){var e;return 0>t||t>=l?null:(e=u[t],null!==e&&e.edge===i.DELETED?(u[t]=null,null):e)}var s={},a=0,h=0,l=0,u=[],c=null;s.getLeftEnd=function(){return c},Object.defineProperties(s,{leftEnd:{get:function(){return s.getLeftEnd()}}});var d=null;return s.getRightEnd=function(){return d},Object.defineProperties(s,{rightEnd:{get:function(){return s.getRightEnd()}}}),s.dispose=function(){for(var t,e=c;e!==d;)t=e,e=e.edgeListRightNeighbor,t.dispose();c=null,d.dispose(),d=null;var r;for(r=0;l>r;r++)u[r]=null;u=null},s.insert=function(t,e){e.edgeListLeftNeighbor=t,e.edgeListRightNeighbor=t.edgeListRightNeighbor,t.edgeListRightNeighbor.edgeListLeftNeighbor=e,t.edgeListRightNeighbor=e},s.remove=function(t){t.edgeListLeftNeighbor.edgeListRightNeighbor=t.edgeListRightNeighbor,t.edgeListRightNeighbor.edgeListLeftNeighbor=t.edgeListLeftNeighbor,t.edge=i.DELETED,t.edgeListLeftNeighbor=t.edgeListRightNeighbor=null},s.edgeListLeftNeighbor=function(t){var e,r;if(e=(t.x-h)/a*l,0>e&&(e=0),e>=l&&(e=l-1),r=o(e),null===r)for(var i=1;;){if(null!==(r=this.getHash(e-i)))break;if(null!==(r=this.getHash(e+i)))break;i++}if(r===this.getLeftEnd()||r!==this.getRightEnd()&&r.isLeftOf(t)){do r=r.edgeListRightNeighbor;while(r!==this.getRightEnd()&&r.isLeftOf(t));r=r.edgeListLeftNeighbor}else do r=r.edgeListLeftNeighbor;while(r!==this.getLeftEnd()&&!r.isLeftOf(t));return e>0&&l-1>e&&(u[e]=r),r},h=t,a=e,l=2*n,u=[],c=r.createDummy(),d=r.createDummy(),c.edgeListLeftNeighbor=null,c.edgeListRightNeighbor=d,d.edgeListLeftNeighbor=c,d.edgeListRightNeighbor=null,u[0]=c,u[l-1]=d,s}},{"./edge":35,"./halfedge":37}],34:[function(t,e){"use strict";var r=t("./criterion"),i=t("./lr"),n=t("./vertex"),o=function(t,e){if(e!==r.vertex&&e!==r.site)throw"Edges: criterion must be Vertex or Site";this.edges=[],this.edgeOrientations=[],t.length>0&&(this.edges=this._reorderEdges(t,e))};o.prototype={edges:null,edgeOrientations:null,dispose:function(){this.edges=null,this.edgeOrientations=null},_reorderEdges:function(t,e){var o,s,a=t.length,h=[],l=0,u=[];o=0,s=t[o],u.push(s),this.edgeOrientations.push(i.LEFT);var c,d;if(e===r.vertex?(c=s.leftVertex,d=s.rightVertex):(c=s.leftSite,d=s.rightSite),c===n.VERTEX_AT_INFINITY||d===n.VERTEX_AT_INFINITY)return[];for(h[o]=!0,++l;a>l;)for(o=1;a>o;o++)if(!h[o]){s=t[o];var f,p;if(e===r.vertex?(f=s.leftVertex,p=s.rightVertex):(f=s.leftSite,p=s.rightSite),f===n.VERTEX_AT_INFINITY||p===n.VERTEX_AT_INFINITY)return[];f===d?(d=p,this.edgeOrientations.push(i.LEFT),u.push(s),h[o]=!0):p===c?(c=f,this.edgeOrientations.unshift(i.LEFT),u.unshift(s),h[o]=!0):f===c?(c=p,this.edgeOrientations.unshift(i.RIGHT),u.unshift(s),h[o]=!0):p===d&&(d=f,this.edgeOrientations.push(i.RIGHT),u.push(s),h[o]=!0),h[o]&&++l}return u}},e.exports=function(t,e){return new o(t,e)}},{"./criterion":31,"./lr":39,"./vertex":43}],35:[function(t,e,r){"use strict";function i(){var t;return h.length>0?(t=h.pop(),t.init()):t=new r.Edge,t}var n=t("../geom/line-segment"),o=t("./lr"),s=t("../../as3/point-core"),a=t("../../as3/rectangle"),h=[],l=0;r.Edge=function(){this._edgeIndex=l++,this.init()},r.Edge.prototype={_delaunayLineBmp:null,getDelaunayLineBmp:function(){return null===this._delaunayLineBmp&&(this._delaunayLineBmp=this.makeDelaunayLineBmp()),this._delaunayLineBmp},get delaunayLineBmp(){return this.getDelaunayLineBmp()},makeDelaunayLineBmp:function(){throw"unimplemented"},delaunayLine:function(){return n(this.leftSite.coord,this.rightSite.coord)},voronoiEdge:function(){return this.visible?n(this.clippedEnds[o.LEFT],this.clippedEnds[o.RIGHT]):n(null,null)},a:null,b:null,c:null,leftVertex:null,rightVertex:null,vertex:function(t){return t===o.LEFT?this.leftVertex:this.rightVertex},setVertex:function(t,e){t===o.LEFT?this.leftVertex=e:this.rightVertex=e},isPartOfConvexHull:function(){return null===this.leftVertex||null===this.rightVertex},sitesDistance:function(){return s.distance(this.leftSite.coord,this.rightSite.coord)},clippedEnds:null,get visible(){return null!==this.clippedEnds},leftSite:null,rightSite:null,site:function(t){return t===o.LEFT?this.leftSite:this.rightSite},_edgeIndex:0,dispose:function(){null!==this._delaunayLineBmp&&(this._delaunayLineBmp.dispose(),this._delaunayLineBmp=null),this.leftVertex=null,this.rightVertex=null,null!==this.clippedEnds&&(this.clippedEnds[o.LEFT]=null,this.clippedEnds[o.RIGHT]=null,this.clippedEnds=null),this.leftSite=null,this.rightSite=null,h.push(this)},toString:function(){return"Edge "+this._edgeIndex+"; sites "+this.leftSite+", "+this.rightSite+"; endVertices "+(null!==this.leftVertex?String(this.leftVertex.vertexIndex):"null")+", "+(null!==this.rightVertex?String(this.rightVertex.vertexIndex):"null")+"::"},clipVertices:function(t){var e,r,i,n,s,h,l=a.core(t),u=t.x,c=t.y,d=l.right(),f=l.bottom();if(1===this.a&&this.b>=0?(e=this.rightVertex,r=this.leftVertex):(e=this.leftVertex,r=this.rightVertex),1===this.a){if(s=c,null!==e&&e.y>c&&(s=e.y),s>f)return;if(i=this.c-this.b*s,h=f,null!==r&&r.y<f&&(h=r.y),c>h)return;if(n=this.c-this.b*h,i>d&&n>d||u>i&&u>n)return;i>d?(i=d,s=(this.c-i)/this.b):u>i&&(i=u,s=(this.c-i)/this.b),n>d?(n=d,h=(this.c-n)/this.b):u>n&&(n=u,h=(this.c-n)/this.b)}else{if(i=u,null!==e&&e.x>u&&(i=e.x),i>d)return;if(s=this.c-this.a*i,n=d,null!==r&&r.x<d&&(n=r.x),u>n)return;if(h=this.c-this.a*n,s>f&&h>f||c>s&&c>h)return;s>f?(s=f,i=(this.c-s)/this.a):c>s&&(s=c,i=(this.c-s)/this.a),h>f?(h=f,n=(this.c-h)/this.a):c>h&&(h=c,n=(this.c-h)/this.a)}this.clippedEnds={},e===this.leftVertex?(this.clippedEnds[o.LEFT]={x:i,y:s},this.clippedEnds[o.RIGHT]={x:n,y:h}):(this.clippedEnds[o.RIGHT]={x:i,y:s},this.clippedEnds[o.LEFT]={x:n,y:h})},init:function(){this.leftSite=null,this.rightSite=null}},r.DELETED=new r.Edge,r.createBisectingEdge=function(t,e){var r,n,o,s,a,h,l;r=e.x-t.x,n=e.y-t.y,o=r>0?r:-r,s=n>0?n:-n,l=t.x*r+t.y*n+.5*(r*r+n*n),o>s?(a=1,h=n/r,l/=r):(h=1,a=r/n,l/=n);var u=i();return u.leftSite=t,u.rightSite=e,t.addEdge(u),e.addEdge(u),u.leftVertex=null,u.rightVertex=null,u.a=a,u.b=h,u.c=l,u},r.compareSitesDistancesMax=function(t,e){var r=t.sitesDistance(),i=e.sitesDistance();return i>r?1:r>i?-1:0},r.compareSitesDistances=function(t,e){return-r.compareSitesDistancesMax(t,e)}},{"../../as3/point-core":10,"../../as3/rectangle":11,"../geom/line-segment":46,"./lr":39}],36:[function(t,e){"use strict";var r=t("./halfedge"),i=t("../../janicek/core");e.exports=function(t,e,n){function o(){var t;for(c=0,d=0,u=[],t=0;f>t;t++)u[t]=r.createDummy(),u[t].nextInPriorityQueue=null}function s(t){var e=i.toInt((t.ystar-p)/g*f);return 0>e&&(e=0),e>=f&&(e=f-1),e}function a(t){return null===u[t].nextInPriorityQueue}function h(){for(;f-1>d&&a(d);)++d}var l={},u=null,c=0,d=0,f=0,p=0,g=0;return l.dispose=function(){var t;for(t=0;f>t;t++)u[t].dispose(),u[t]=null;u=null},l.insert=function(t){var e,r,i=s(t);for(d>i&&(d=i),e=u[i];null!==(r=e.nextInPriorityQueue)&&(t.ystar>r.ystar||t.ystar===r.ystar&&t.vertex.x>r.vertex.x);)e=r;t.nextInPriorityQueue=e.nextInPriorityQueue,e.nextInPriorityQueue=t,++c},l.remove=function(t){var e,r=s(t);if(null!==t.vertex){for(e=u[r];e.nextInPriorityQueue!==t;)e=e.nextInPriorityQueue;e.nextInPriorityQueue=t.nextInPriorityQueue,c--,t.vertex=null,t.nextInPriorityQueue=null,t.dispose()}},l.empty=function(){return 0===c},l.min=function(){h();var t=u[d].nextInPriorityQueue;return{x:t.vertex.x,y:t.ystar}},l.extractMin=function(){var t;return t=u[d].nextInPriorityQueue,u[d].nextInPriorityQueue=t.nextInPriorityQueue,c--,t.nextInPriorityQueue=null,t},p=t,g=e,f=4*n,o(),l}},{"../../janicek/core":20,"./halfedge":37}],37:[function(t,e,r){"use strict";var i=t("../../janicek/core").def,n=t("./lr"),o=[],s=function(t,e){t=i(t,null),e=i(e,null),this.init(t,e)};s.prototype={edgeListLeftNeighbor:null,edgeListRightNeighbor:null,nextInPriorityQueue:null,edge:null,leftRight:null,vertex:null,ystar:0,toString:function(){return"Halfedge (leftRight: "+this.leftRight+"; vertex: "+this.vertex+")"},dispose:function(){null===this.edgeListLeftNeighbor&&null===this.edgeListRightNeighbor&&null===this.nextInPriorityQueue&&(this.edge=null,this.leftRight=null,this.vertex=null,o.push(this))},reallyDispose:function(){this.edgeListLeftNeighbor=null,this.edgeListRightNeighbor=null,this.nextInPriorityQueue=null,this.edge=null,this.leftRight=null,this.vertex=null,o.push(this)},isLeftOf:function(t){var e,r,i,o,s,a,h,l,u,c,d;return e=this.edge.rightSite,r=t.x>e.x,r&&this.leftRight===n.LEFT?!0:r||this.leftRight!==n.RIGHT?(1===this.edge.a?(a=t.y-e.y,s=t.x-e.x,o=!1,!r&&this.edge.b<0||r&&this.edge.b>=0?(i=a>=this.edge.b*s,o=i):(i=t.x+t.y*this.edge.b>this.edge.c,this.edge.b<0&&(i=!i),i||(o=!0)),o||(h=e.x-this.edge.leftSite.x,i=this.edge.b*(s*s-a*a)<h*a*(1+2*s/h+this.edge.b*this.edge.b),this.edge.b<0&&(i=!i))):(d=this.edge.c-this.edge.a*t.x,l=t.y-d,u=t.x-e.x,c=d-e.y,i=l*l>u*u+c*c),this.leftRight===n.LEFT?i:!i):!1
},init:function(t,e){return this.edge=t,this.leftRight=e,this.nextInPriorityQueue=null,this.vertex=null,this}},r.create=function(t,e){return o.length>0?o.pop().init(t,e):new s(t,e)},r.createDummy=function(){return r.create(null,null)}},{"../../janicek/core":20,"./lr":39}],38:[function(t,e,r){"use strict";var i=t("lodash"),n=t("../../janicek/core").def,o=t("../geom/line-segment").core,s=t("./node"),a=t("../../as3/point-core");r.find=function(t){if(t.parent===t)return t;var e=r.find(t.parent);return t.parent=e,e},r.kruskal=function(t,e){e=n(e,"minimum");var h={},l=[],u=[];switch(e){case"maximum":t.sort(o.compareLengths);break;default:t.sort(o.compareLengthsMax)}for(var c=t.length-1;c>=0;){var d=t[c];c--;var f,p=h[a.hash(d.p0)];null===p?(p=u.length>0?u.pop():s(),f=p.parent=p,p.treeSize=1,h[a.hash(d.p0)]=p):f=r.find(p);var g,v=h[a.hash(d.p1)];if(null===v?(v=u.length>0?u.pop():s(),g=v.parent=v,v.treeSize=1,h[a.hash(d.p1)]=v):g=r.find(v),f!==g){l.push(d);var m=f.treeSize,x=g.treeSize;m>=x?(g.parent=f,f.treeSize+=x):(f.parent=g,g.treeSize+=m)}}return i(h).each(function(t){u.push(t)}),l}},{"../../as3/point-core":10,"../../janicek/core":20,"../geom/line-segment":46,"./node":40,lodash:1}],39:[function(t,e){"use strict";e.exports={LEFT:"left",RIGHT:"right",other:function(t){return t===this.LEFT?this.RIGHT:this.LEFT}}},{}],40:[function(t,e){"use strict";e.exports=function(){return{parent:null,treeSize:0}},e.exports.pool=[]},{}],41:[function(t,e){"use strict";var r=t("lodash"),i=t("../geom/circle"),n=t("../../janicek/core").def,o=t("../../as3/rectangle"),s=t("./site");e.exports=function(){var t=[],e=0,a=!1,h={};return h.dispose=function(){null!==t&&(r(t).each(function(t){t.dispose()}),t=null)},h.push=function(e){return a=!1,t.push(e)},Object.defineProperties(h,{length:{get:function(){return t.length}}}),h.next=function(){if(a===!1)throw"SiteList::next():  sites have not been sorted";return e<t.length?t[e++]:null},h.getSitesBounds=function(){a===!1&&(s.sortSites(t),e=0,a=!0);var i,n,h,l;return 0===t.length?o(0,0,0,0):(i=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,r(t).each(function(t){t.x<i&&(i=t.x),t.x>n&&(n=t.x)}),h=t[0].y,l=t[t.length-1].y,o(i,h,n-i,l-h))},h.siteColors=function(e){e=n(e,null);var i=[];return r(t).each(function(t){i.push(null!==e?e.getPixel(t.x,t.y):t.color)}),i},h.siteCoords=function(){var e=[];return r(t).each(function(t){e.push(t.coord)}),e},
h.circles=function(){
	var e=[];
	return r(t).each(function(t){
		var r=t.nearestEdge(),
		n=r.isPartOfConvexHull()?0:.5*r.sitesDistance();
		e.push(i(t.x,t.y,n))
	}),e
},
h.regions=function(e){
	var i=[];
	return r(t).each(function(t){
		i.push(t.region(e))
	}),i
},
h.nearestSitePoint=function(e,r,i){
	var n=e.getPixel(r,i);
	return n>t.length-1?null:t[n].coord
},h
}
},
{"../../as3/rectangle":11,
"../../janicek/core":20,
"../geom/circle":45,
"./site":42,
lodash:1
}
],
42:[
function(t,e,r){
	"use strict";
	function i(t,e){
		return c.distance(t,e)<m
	}
	var n=t("lodash"),
	o=t("./bounds-check"),
	s=t("./criterion"),
	a=t("../../janicek/core").def,
	h=t("./edge"),
	l=t("./edge-reorderer"),
	u=t("./lr"),
	c=t("../../as3/point-core"),
	d=t("../geom/polygon"),
	f=t("../../as3/rectangle").core,
	p=t("./voronoi"),
	g=t("../geom/winding"),
	v=[],
	m=.005,
	x=function(t,e,r,i){
		this.init(t,e,r,i)
	};
	x.prototype={
		_coord:null,
		get coord(){
			return this._coord
		},
		color:0,
		weight:0,
		_siteIndex:0,
		_edges:null,
		get edges(){
			return this._edges
		},
		_edgeOrientations:null,
		_region:null,
		init:function(t,e,r,i){
			return this._coord=t,
			this._siteIndex=e,
			this.weight=r,
			this.color=i,
			this._edges=[],
			this._region=null,
			this
		},
		toString:function(){
			return"Site "+this._siteIndex+": "+String(this.coord)
		},
		dispose:function(){
			this._coord=null,
			this._clear(),
			v.push(this)
		},
		_clear:function(){
			null!==this._edges&&(this._edges=null),
			null!==this._edgeOrientations&&(this._edgeOrientations=null),
			null!==this._region&&(this._region=null)
		},
		addEdge:function(t){
			this._edges.push(t)
		},
		nearestEdge:function(){
			return this._edges.sort(h.compareSitesDistances),
			this._edges[0]
		},
		neighborSites:function(){
			if(null===this._edges||0===this._edges.length)
				return[];
			null===this._edgeOrientations&&this._reorderEdges();
			var t=[];
			return n.each(this._edges,function(e){
				t.push(this._neighborSite(e))
			}),
			t
		},
		_neighborSite:function(t){
			return this===t.leftSite?t.rightSite:this===t.rightSite?t.leftSite:null
		},
		region:function(t){
			return null===this._edges||0===this._edges.length?[]:(null===this._edgeOrientations&&(this._reorderEdges(),
				this._region=this._clipToBounds(t),
				d(this._region).winding()===g.CLOCKWISE&&this._region.reverse()),
			this._region)
		},
		_reorderEdges:function(){
			var t=l(this._edges,s.vertex);
			this._edges=t.edges,
			this._edgeOrientations=t.edgeOrientations,
			t.dispose()
		},
		_clipToBounds:function(t){
			for(var e=[],r=this._edges.length,i=0,n=null;r>i&&this._edges[i].visible===!1;)
				++i;
			if(i===r)
				return[];
			n=this._edges[i];
			var o=this._edgeOrientations[i];
			e.push(n.clippedEnds[o]),
			e.push(n.clippedEnds[u.other(o)]);
			for(var s=i+1;r>s;s++)
				n=this._edges[s],
			n.visible!==!1&&this._connect(e,s,t);
			return this._connect(e,i,t,!0),e
		},
		_connect:function(t,e,r,n){
			n=a(n,!1);
			var s=t[t.length-1],
			h=this._edges[e],
			l=this._edgeOrientations[e],
			c=h.clippedEnds[l];
			if(!i(s,c)){
				if(s.x!==c.x&&s.y!==c.y){
					var d,p,g=o.check(s,r),v=o.check(c,r);
					0!==(g&o.RIGHT)?(d=f(r).right(),
						0!==(v&o.BOTTOM)?(p=f(r).bottom(),
							t.push({x:d,y:p})):0!==(v&o.TOP)?(p=f(r).top(),
							t.push({x:d,y:p})):0!==(v&o.LEFT)&&(p=s.y-r.y+c.y-r.y<r.height?f(r).top():f(r).bottom(),t.push({x:d,y:p}),t.push({x:f(r).left(),y:p}))):0!==(g&o.LEFT)?(d=f(r).left(),
					0!==(v&o.BOTTOM)?(p=f(r).bottom(),t.push({x:d,y:p})):0!==(v&o.TOP)?(p=f(r).top(),t.push({x:d,y:p})):0!==(v&o.RIGHT)&&(p=s.y-r.y+c.y-r.y<r.height?f(r).top():f(r).bottom(),
						t.push({x:d,y:p}),t.push({x:f(r).right(),y:p}))):0!==(g&o.TOP)?(p=f(r).top(),
							0!==(v&o.RIGHT)?(d=f(r).right(),t.push({x:d,y:p})):0!==(v&o.LEFT)?(d=f(r).left(),
			t.push({x:d,y:p})):0!==(v&o.BOTTOM)&&(d=s.x-r.x+c.x-r.x<5000?f(r).left():f(r).right(),t.push({x:d,y:p}),t.push({x:d,y:f(r).bottom()}))):0!==(g&o.BOTTOM)&&(p=f(r).bottom(),0!==(v&o.RIGHT)?(d=f(r).right(),t.push({x:d,y:p})):0!==(v&o.LEFT)?(d=f(r).left(),t.push({x:d,y:p})):0!==(v&o.TOP)&&(d=s.x-r.x+c.x-r.x<5000?f(r).left():f(r).right(),t.push({x:d,y:p}),t.push({x:d,y:f(r).top()})))}if(n)return;t.push(c)}var m=h.clippedEnds[u.other(l)];i(t[0],m)||t.push(m)},get x(){return this._coord.x},get y(){return this._coord.y},dist:function(t){return c.distance(t.coord,this.coord)}},r.create=function(t,e,r,i){return v.length>0?v.pop().init(t,e,r,i):new x(t,e,r,i)},r.sortSites=function(t){t.sort(p.compareSiteByYThenX),n(t).each(function(e,r){t[r]._siteIndex=r})}},{"../../as3/point-core":10,"../../as3/rectangle":11,"../../janicek/core":20,"../geom/polygon":47,"../geom/winding":48,"./bounds-check":30,"./criterion":31,"./edge":35,"./edge-reorderer":34,"./lr":39,"./voronoi":44,lodash:1}],43:[function(t,e,r){"use strict";function i(t,e){return isNaN(t)||isNaN(e)?r.VERTEX_AT_INFINITY:n.length>0?n.pop().init(t,e):new s(t,e)}var n=[],o=0,s=function(t,e){this.init(t,e)};s.prototype={_coord:null,get coord(){return this._coord},vertexIndex:0,init:function(t,e){return this._coord={x:t,y:e},this},dispose:function(){this._coord=null,n.push(this)},setIndex:function(){this.vertexIndex=o++},toString:function(){return"Vertex ("+this.vertexIndex+")"},get x(){return this._coord.x},get y(){return this._coord.y}},r.VERTEX_AT_INFINITY=new s(0/0,0/0),r.intersect=function(e,r){var n,o,s,a,h,l,u,c,d=t("./voronoi"),f=t("./lr");return n=e.edge,o=r.edge,null===n||null===o?null:n.rightSite===o.rightSite?null:(h=n.a*o.b-n.b*o.a,h>-1e-10&&1e-10>h?null:(l=(n.c*o.b-o.c*n.b)/h,u=(o.c*n.a-n.c*o.a)/h,d.compareSiteByYThenX(n.rightSite,o.rightSite)<0?(a=e,s=n):(a=r,s=o),c=l>=s.rightSite.x,c&&a.leftRight===f.LEFT||!c&&a.leftRight===f.RIGHT?null:i(l,u)))}},{"./lr":39,"./voronoi":44}],44:[function(t,e,r){"use strict";var i=t("lodash"),n=t("./criterion"),o=t("../../janicek/core"),s=t("../../janicek/core").def,a=t("./delaunay"),h=t("./edge-list"),l=t("./edge"),u=t("./edge-reorderer"),c=t("./halfedge"),d=t("./halfedge-priority-queue"),f=t("./kruskal"),p=t("./lr"),g=t("../../as3/point-core"),v=t("../../polygonal/pm-prng"),m=t("./site-list"),x=t("./site"),y=t("./vertex");r.make=function(t,e,b){function T(t){var e={};i(t).each(function(t){if(i(e).has(g.hash(t)))throw"Duplicate points not supported yet!";e[g.hash(t)]=t})}function S(t,e){for(var r=t.length,i=0;r>i;i++)w(t[i],null!==e?e[i]:0,i)}function w(t,e,r){var i=100*C.nextDouble(),n=x.create(t,r,i,e);A.push(n),R[g.hash(t)]=n}function E(){return i(L).filter(function(t){return t.isPartOfConvexHull()})}function _(){function t(t){var e=t.edge;return null===e?P:e.site(t.leftRight)}function e(t){var e=t.edge;return null===e?P:e.site(p.other(t.leftRight))}var n,s,a,u,f,g,v,m,x,b,T,S,w,E,_=A.getSitesBounds(),C=o.toInt(Math.sqrt(A.length+4)),R=d(_.y,_.height,C),M=h(_.x,_.width,C),I=[],B=[],P=A.next();for(n=A.next();;)if(R.empty()===!1&&(v=R.min()),null!==n&&(R.empty()||r.comparePointByYThenX(n,v)<0))x=M.edgeListLeftNeighbor(n.coord),b=x.edgeListRightNeighbor,s=e(x),E=l.createBisectingEdge(s,n),L.push(E),w=c.create(E,p.LEFT),I.push(w),M.insert(x,w),null!==(g=y.intersect(x,w))&&(B.push(g),R.remove(x),x.vertex=g,x.ystar=g.y+n.dist(g),R.insert(x)),x=w,w=c.create(E,p.RIGHT),I.push(w),M.insert(x,w),null!==(g=y.intersect(w,b))&&(B.push(g),w.vertex=g,w.ystar=g.y+n.dist(g),R.insert(w)),n=A.next();else{if(R.empty()!==!1)break;x=R.extractMin(),T=x.edgeListLeftNeighbor,b=x.edgeListRightNeighbor,S=b.edgeListRightNeighbor,s=t(x),a=e(b),f=x.vertex,f.setIndex(),x.edge.setVertex(x.leftRight,f),b.edge.setVertex(b.leftRight,f),M.remove(x),R.remove(b),M.remove(b),m=p.LEFT,s.y>a.y&&(u=s,s=a,a=u,m=p.RIGHT),E=l.createBisectingEdge(s,a),L.push(E),w=c.create(E,m),I.push(w),M.insert(T,w),E.setVertex(p.other(m),f),null!==(g=y.intersect(T,w))&&(B.push(g),R.remove(T),T.vertex=g,T.ystar=g.y+s.dist(g),R.insert(T)),null!==(g=y.intersect(w,S))&&(B.push(g),w.vertex=g,w.ystar=g.y+s.dist(g),R.insert(w))}R.dispose(),M.dispose(),i(I).each(function(t){t.reallyDispose()}),i(L).each(function(t){t.clipVertices(F.plotBounds)}),i(B).each(function(t){t.dispose()})}var C=v(),A=m(),R={},M=[],L=[],F={};return F.plotBounds=b,F.dispose=function(){var t,e;if(null!==A&&(A.dispose(),A=null),null!==M){for(e=M.length,t=0;e>t;t++)M[t].dispose();M=null}if(null!==L){for(e=L.length,t=0;e>t;t++)L[t].dispose();L=null}F.plotBounds=null,R=null},F.edges=function(){return L},F.region=function(t){var e=R[g.hash(t)];return null===e?[]:e.region(F.plotBounds)},F.neighborSitesForSite=function(t){var e=[],r=R[g.hash(t)];if(null===r)return e;var n=r.neighborSites();return i(n).each(function(t){e.push(t.coord)}),e},F.circles=function(){return A.circles()},F.voronoiBoundaryForSite=function(t){return a.visibleLineSegments(a.selectEdgesForSitePoint(t,L))},F.delaunayLinesForSite=function(t){return a.delaunayLinesForEdges(a.selectEdgesForSitePoint(t,L))},F.voronoiDiagram=function(){return a.visibleLineSegments(L)},F.delaunayTriangulation=function(t){return t=s(t,null),a.delaunayLinesForEdges(a.selectNonIntersectingEdges(t,L))},F.hull=function(){return a.delaunayLinesForEdges(E())},F.hullPointsInOrder=function(){var t=t(),e=[];if(0===t.length)return e;var r=u(t,n.site);t=r.edges;var i=r.edgeOrientations;r.dispose();var o,s,a=t.length;for(s=0;a>s;s++){var h=t[s];o=i[s],e.push(h.site(o).coord)}return e},F.spanningTree=function(t,e){t=s(t,"minimum"),e=s(e,null);var r=a.selectNonIntersectingEdges(e,L),i=a.delaunayLinesForEdges(r);return f.kruskal(i,t)},F.regions=function(){return A.regions(F.plotBounds)},F.siteColors=function(t){return t=s(t,null),A.siteColors(t)},F.nearestSitePoint=function(t,e,r){return A.nearestSitePoint(t,e,r)},F.siteCoords=function(){return A.siteCoords()},T(t),C.seed=1,S(t,e),_(),F},r.isInfSite=function(t,e){return t.y<e.y||t.y===e.y&&t.x<e.x},r.comparePointByYThenX=function(t,e){return r.compareByYThenX(t.x,t.y,e.x,e.y)},r.compareSiteByYThenX=function(t,e){return r.compareByYThenX(t.x,t.y,e.x,e.y)},r.compareByYThenX=function(t,e,r,i){return i>e?-1:e>i?1:r>t?-1:t>r?1:0}},{"../../as3/point-core":10,"../../janicek/core":20,"../../polygonal/pm-prng":51,"./criterion":31,"./delaunay":32,"./edge":35,"./edge-list":33,"./edge-reorderer":34,"./halfedge":37,"./halfedge-priority-queue":36,"./kruskal":38,"./lr":39,"./site":42,"./site-list":41,"./vertex":43,lodash:1}],45:[function(t,e){"use strict";e.exports=function(t,e,r){return{center:{x:t,y:e},radius:r,toString:function(){return"Circle (center: "+this.center+"; radius: "+this.radius+")"}}}},{}],46:[function(t,e){"use strict";var r=t("../../as3/point-core");e.exports=function(t,e){return{p0:t,p1:e}},e.exports.core={compareLengthsMax:function(t,e){var i=r.distance(t.p0,t.p1),n=r.distance(e.p0,e.p1);return n>i?1:i>n?-1:0},compareLengths:function(t,e){return-this.compareLengthsMax(t,e)}}},{"../../as3/point-core":10}],47:[function(t,e){"use strict";var r=t("./winding"),i=function(t){this._vertices=t};i.prototype={area:function(){return Math.abs(.5*this.signedDoubleArea())},winding:function(){var t=this.signedDoubleArea();return 0>t?r.CLOCKWISE:t>0?r.COUNTERCLOCKWISE:r.NONE},signedDoubleArea:function(){var t,e,r,i,n=this._vertices.length,o=0;for(t=0;n>t;t++)e=(t+1)%n,r=this._vertices[t],i=this._vertices[e],o+=r.x*i.y-i.x*r.y;return o}},e.exports=function(t){return new i(t)}},{"./winding":48}],48:[function(t,e){"use strict";e.exports={CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise",NONE:"none"}},{}],49:[function(t,e){"use strict";var r=t("lodash"),i=t("./as3/conversion-core"),n=t("./janicek/core"),o=t("./as3/point-core"),s=t("./janicek/pseudo-random-number-generators");e.exports=function(){var t={};return t.path0=[],t.path1=[],t.buildNoisyEdges=function(a,h,l,u){u=n.def(u,.5);var c=s.randomGenerator(l,s.nextParkMiller);r(a.centers).each(function(s){r(s.borders).each(function(r){if(!n.isUndefinedOrNull(r.d0)&&!n.isUndefinedOrNull(r.d1)&&!n.isUndefinedOrNull(r.v0)&&!n.isUndefinedOrNull(r.v1)&&n.isUndefinedOrNull(t.path0[r.index])){var s=u,a=o.interpolate(r.v0.point,r.d0.point,s),l=o.interpolate(r.v0.point,r.d1.point,s),d=o.interpolate(r.v1.point,r.d0.point,s),f=o.interpolate(r.v1.point,r.d1.point,s),p=10;r.d0.biome!==r.d1.biome&&(p=3),r.d0.ocean&&r.d1.ocean&&(p=100),(r.d0.coast||r.d1.coast)&&(p=1),(i.booleanFromInt(r.river)||!n.isUndefinedOrNull(h.lava[r.index]))&&(p=1),t.path0[r.index]=e.exports.buildNoisyLineSegments(c(),r.v0.point,a,r.midpoint,l,p),t.path1[r.index]=e.exports.buildNoisyLineSegments(c(),r.v1.point,f,r.midpoint,d,p)}})})},t},e.exports.buildNoisyLineSegments=function(t,e,r,i,n,a){function h(t,e,r,i){if(!(o.distanceFromOrigin(o.subtract(t,r))<a||o.distanceFromOrigin(o.subtract(e,i))<a)){var n=s.toFloatRange(l(),.2,.8),c=s.toFloatRange(l(),.2,.8),d=o.interpolate(t,i,n),f=o.interpolate(e,r,n),p=o.interpolate(t,e,c),g=o.interpolate(i,r,c),v=o.interpolate(d,f,c),m=1-s.toFloatRange(l(),-.4,.4),x=1-s.toFloatRange(l(),-.4,.4);h(t,o.interpolate(p,e,m),v,o.interpolate(d,i,x)),u.push(v),h(v,o.interpolate(f,r,m),r,o.interpolate(g,i,x))}}var l=s.randomGenerator(t,s.nextParkMiller),u=[];return u.push(e),h(e,r,i,n),u.push(i),u}},{"./as3/conversion-core":8,"./as3/point-core":10,"./janicek/core":20,"./janicek/pseudo-random-number-generators":25,lodash:1}],50:[function(t,e){"use strict";var r=t("./polygonal/pm-prng"),i=t("./as3/rectangle"),n=t("./nodename/delaunay/voronoi"),o={needsMoreRandomness:function(t){return t===o.generateSquare||t===o.generateHexagon},generateRandom:function(t,e,i){return function(n){var o=r();o.seed=i;for(var s=[],a=0;n>a;a++)s.push({x:o.nextDoubleRange(10,t-10),y:o.nextDoubleRange(10,e-10)});return s}},generateRelaxed:function(t,e,r,s){return s=s||2,function(a){for(var h=o.generateRandom(t,e,r)(a),l=0;s>l;l++){for(var u=n.make(h,null,i(0,0,t,e)),c=0;c<h.length;c++){var d=h[c],f=u.region(d);d.x=0,d.y=0;for(var p=0;p<f.length;p++){var g=f[p];d.x+=g.x,d.y+=g.y}d.x/=f.length,d.y/=f.length,f.splice(0,f.length)}u.dispose()}return h}},generateSquare:function(t,e){return function(r){for(var i=[],n=Math.sqrt(r),o=0;n>o;o++)for(var s=0;n>s;s++)i.push({x:(.5+o)/n*t,y:(.5+s)/n*e});return i}},generateHexagon:function(t,e){return function(r){for(var i=[],n=Math.sqrt(r),o=0;n>o;o++)for(var s=0;n>s;s++)i.push({x:(.5+o)/n*t,y:(.25+.5*o%2+s)/n*e});return i}}};e.exports=o},{"./as3/rectangle":11,"./nodename/delaunay/voronoi":44,"./polygonal/pm-prng":51}],51:[function(t,e){"use strict";e.exports=function(){return{seed:1,nextDouble:function(){return this.gen()/2147483647},nextIntRange:function(t,e){return t-=.4999,e+=.4999,Math.round(t+(e-t)*this.nextDouble())},nextDoubleRange:function(t,e){return t+(e-t)*this.nextDouble()},gen:function(){return this.seed=16807*this.seed%2147483647,this.seed}}}},{}],52:[function(t,e,r){"use strict";function i(t,e){for(var r=0;r<e.length;r++)t.lineTo(e[r].x,e[r].y)}function n(t,e,r,i,n,o,a,l){var u=c(),d=e.add(r).add(i);d.scaleBy(1/3);var p=r.subtract(e).crossProduct(i.subtract(e));p.normalize();var g=f(-p.x/p.z,-p.y/p.z,0),v=f(d.x-g.x*((d.z-.5)/g.length/g.length),d.y-g.y*((d.z-.5)/g.length/g.length));if(g.length<1e-6){var m=n[0];2===n.length?m=h.interpolateColor(n[0],n[1],d.z):3===n.length&&(m=d.z<.5?h.interpolateColor(n[0],n[1],2*d.z):h.interpolateColor(n[1],n[2],2*d.z-1)),t.fillStyle=h.intToHexColor(m)}else{u.createGradientBox(1,1,0,0,0),u.translate(-.5,-.5),u.scale(1/g.length,1/g.length),u.rotate(Math.atan2(g.y,g.x)),u.translate(v.x,v.y);{s(n).map(function(){return 1}),s(n).map(function(t,e){return 255*e/(n.length-1)})}}o(t,a,l),t.fill()}function o(t,e){for(var r=e.length-1;r>=0;)t.lineTo(e[r].x,e[r].y),r--}var s=t("lodash"),a=t("./janicek/canvas"),h=t("./janicek/html-color"),l=t("./as3/conversion-core"),u=t("./janicek/core"),c=t("./as3/matrix"),d=t("./as3/point-core"),f=t("./as3/vector-3d");r.graphicsReset=function(t,e,r,i){t.lineWidth=1,t.clearRect(0,0,2e3,2e3),t.fillStyle="#bbbbaa",t.fillRect(0,0,2e3,2e3),t.fillStyle=h.intToHexColor(i.OCEAN),t.fillRect(0,0,u.toInt(e),u.toInt(r))},r.colorWithSmoothColors=function(t,e,r,i,n){return null!==r&&e.water===r.water&&(t=h.interpolateColor(n[e.biome],n[r.biome],.25)),t},r.renderDebugPolygons=function(t,e,r){var i;0===e.centers.length&&(t.fillStyle="#dddddd",t.fillRect(0,0,u.toInt(e.SIZE.width),u.toInt(e.SIZE.height)),s(e.points).each(function(e){t.beginPath(),t.strokeStyle="#000000",t.fillStyle="#000000",t.arc(e.x,e.y,1.3,Math.PI,2*Math.PI,!1),t.closePath(),t.fill(),t.stroke()})),s(e.centers).each(function(e){i=s.isNull(e.biome)?e.ocean?r.OCEAN:e.water?r.RIVER:16777215:r[e.biome],t.beginPath(),s(e.borders).each(function(r){s.isNull(r.v0)||s.isNull(r.v1)||(t.moveTo(e.point.x,e.point.y),t.lineTo(r.v0.point.x,r.v0.point.y),t.lineTo(r.v1.point.x,r.v1.point.y))}),t.closePath(),t.fillStyle=h.intToHexColor(h.interpolateColor(i,14540253,.2)),t.fill(),s(e.borders).each(function(e){s.isNull(e.v0)||s.isNull(e.v1)||(t.beginPath(),t.moveTo(e.v0.point.x,e.v0.point.y),e.river>0?(t.lineWidth=1,t.strokeStyle=h.intToHexColor(r.RIVER)):(t.lineWidth=.1,t.strokeStyle="#000000"),t.lineTo(e.v1.point.x,e.v1.point.y),t.closePath(),t.stroke())}),t.beginPath(),t.fillStyle=e.water?"#003333":"#000000",t.globalAlpha=.7,t.arc(e.point.x,e.point.y,1.3,Math.PI,2*Math.PI,!1),t.closePath(),t.fill(),t.globalAlpha=1,s(e.corners).each(function(e){t.fillStyle=e.water?"#0000ff":"#009900",t.fillRect(e.point.x-.7,e.point.y-.7,1.5,1.5)})})},r.renderWatersheds=function(t,e,r){var i,n,o;s(e.edges).each(function(i){i.d0&&i.d1&&i.v0&&i.v1&&!i.d0.ocean&&!i.d1.ocean&&(n=r.watersheds[i.d0.index],o=r.watersheds[i.d1.index],n!==o&&(t.beginPath(),t.lineWidth=3.5,t.strokeStyle=h.rgba(0,0,0,.1*Math.sqrt(u.coalesce(e.corners[n].watershedSize,1)+u.coalesce(e.corners[o].watershed.watershedSize,1))),t.moveTo(i.v0.point.x,i.v0.point.y),t.lineTo(i.v1.point.x,i.v1.point.y),t.closePath(),t.stroke()))});for(i in e.edges)l.booleanFromInt(i.river)&&(t.beginPath(),t.lineWidth=1,t.strokeStyle="#6699ff",t.moveTo(i.v0.point.x,i.v0.point.y),t.lineTo(i.v1.point.x,i.v1.point.y),t.closePath(),t.stroke())},r.renderPolygons=function(t,e,r,o,s,a){t.fillStyle=h.intToHexColor(e.OCEAN),t.fillRect(0,0,u.toInt(s.SIZE.width),u.toInt(s.SIZE.height));for(var l=function(t,e,r){var n=a.path0[m.index];t.moveTo(e,r),t.lineTo(n[0].x,n[0].y),i(t,n),t.lineTo(e,r)},c=function(t,e,r){var n=a.path1[m.index];t.moveTo(e,r),t.lineTo(n[0].x,n[0].y),i(t,n),t.lineTo(e,r)},d=0;d<s.centers.length;d++)for(var p=s.centers[d],g=0;g<p.neighbors.length;g++){var v=p.neighbors[g],m=s.lookupEdgeFromCenter(p,v),x=u.coalesce(e[p.biome],0);if(null!==o&&(x=o(x,p,v,m,e)),!u.isUndefinedOrNull(a.path0[m.index])&&!u.isUndefinedOrNull(a.path1[m.index]))if(u.isUndefinedOrNull(r))t.fillStyle=h.intToHexColor(x),t.strokeStyle=t.fillStyle,t.beginPath(),l(t,p.point.x,p.point.y),c(t,p.point.x,p.point.y),t.closePath(),t.fill(),t.stroke();else{var y=m.v0,b=m.v1,T=m.midpoint,S=.5*(y[r]+b[r]);n(t,f(p.point.x,p.point.y,p[r]),f(y.point.x,y.point.y,y[r]),f(T.x,T.y,S),[e.GRADIENT_LOW,e.GRADIENT_HIGH],l,p.point.x,p.point.y),n(t,f(p.point.x,p.point.y,p[r]),f(T.x,T.y,S),f(b.point.x,b.point.y,b[r]),[e.GRADIENT_LOW,e.GRADIENT_HIGH],c,p.point.x,p.point.y)}}},r.renderBridges=function(t,e,r,i){s(e.edges).each(function(e){if(e.river>0&&e.river<4&&!e.d0.water&&!e.d1.water&&(e.d0.elevation>.05||e.d1.elevation>.05)){var n={x:-(e.v1.point.y-e.v0.point.y),y:e.v1.point.x-e.v0.point.x};d.normalize(n,.25+(s.isNull(r.road[e.index])?0:.5)+.75*Math.sqrt(e.river)),t.beginPath(),t.lineWidth=1.1,t.strokeStyle=h.intToHexColor(i.BRIDGE),t.lineCap="square",t.moveTo(e.midpoint.x-n.x,e.midpoint.y-n.y),t.lineTo(e.midpoint.x+n.x,e.midpoint.y+n.y),t.closePath(),t.stroke()}})},r.renderRoads=function(t,e,r,i){function n(t,e,r){var i={x:-(t.v1.point.y-t.v0.point.y),y:t.v1.point.x-t.v0.point.x},n=d.subtract(e,t.midpoint);return i.x*n.x+i.y*n.y<0&&(i.x=-i.x,i.y=-i.y),d.normalize(i,r),i}var o,a,l,c,f,p,g,v,m;s(e.centers).each(function(e){if(!u.isUndefinedOrNull(r.roadConnections[e.index]))if(2===r.roadConnections[e.index].length){for(m=e.borders,c=0;c<m.length;c++)if(g=m[c],r.road[g.index]>0)for(f=c+1;f<m.length;f++)v=m[f],r.road[v.index]>0&&(p=.5*Math.min(d.distanceFromOrigin(d.subtract(g.midpoint,e.point)),d.distanceFromOrigin(d.subtract(v.midpoint,e.point))),o=d.add(n(g,e.point,p),g.midpoint),a=d.add(n(v,e.point,p),v.midpoint),l=d.interpolate(o,a,.5),t.beginPath(),t.lineWidth=1.1,t.strokeStyle=h.intToHexColor(i["ROAD"+r.road[g.index]]),t.moveTo(g.midpoint.x,g.midpoint.y),t.quadraticCurveTo(o.x,o.y,l.x,l.y),t.moveTo(l.x,l.y),t.lineWidth=1.1,t.strokeStyle=h.intToHexColor(i["ROAD"+r.road[v.index]]),t.quadraticCurveTo(a.x,a.y,v.midpoint.x,v.midpoint.y),t.stroke(),t.closePath())}else s(e.borders).each(function(s){r.road[s.index]>0&&(p=.25*d.distanceFromOrigin(d.subtract(s.midpoint,e.point)),o=d.add(n(s,e.point,p),s.midpoint),t.beginPath(),t.lineWidth=1.4,t.strokeStyle=h.intToHexColor(i["ROAD"+r.road[s.index]]),t.moveTo(s.midpoint.x,s.midpoint.y),t.quadraticCurveTo(o.x,o.y,e.point.x,e.point.y),t.stroke(),t.closePath())})})},r.renderEdges=function(t,e,r,n,s,a){a=u.def(a,!0);for(var c,d=0;d<r.centers.length;d++)for(var f=r.centers[d],p=0;p<f.neighbors.length;p++){var g=f.neighbors[p];if(c=r.lookupEdgeFromCenter(f,g),!u.isUndefinedOrNull(n.path0[c.index])&&!u.isUndefinedOrNull(n.path1[c.index])){if(f.ocean!==g.ocean)t.lineWidth=2,t.strokeStyle=h.intToHexColor(e.COAST);else if(l.intFromBoolean(f.water)>0!=l.intFromBoolean(g.water)>0&&"ICE"!==f.biome&&"ICE"!==g.biome)t.lineWidth=1,t.strokeStyle=h.intToHexColor(e.LAKESHORE);else{if(f.water||g.water)continue;if(s.lava[c.index])t.lineWidth=1,t.strokeStyle=h.intToHexColor(e.LAVA);else{if(!(c.river>0&&a))continue;t.lineWidth=Math.sqrt(c.river),t.strokeStyle=h.intToHexColor(e.RIVER)}}t.beginPath(),t.moveTo(n.path0[c.index][0].x,n.path0[c.index][0].y),i(t,n.path0[c.index]),o(t,n.path1[c.index]),t.stroke(),t.closePath()}}},r.renderAllEdges=function(t,e,r,n,s){var a;t.lineWidth=5,t.strokeStyle=h.intToHexColor(e);var l=t.globalAlpha;t.globalAlpha=r;for(var c=0;c<n.centers.length;c++)for(var d=n.centers[c],f=0;f<d.neighbors.length;f++){var p=d.neighbors[f];a=n.lookupEdgeFromCenter(d,p),u.isUndefinedOrNull(s.path0[a.index])||u.isUndefinedOrNull(s.path1[a.index])||d.water||(t.beginPath(),t.moveTo(s.path0[a.index][0].x,s.path0[a.index][0].y),i(t,s.path0[a.index]),o(t,s.path1[a.index]),t.stroke(),t.closePath())}t.globalAlpha=l},r.addNoise=function(t){a.addNoiseToCanvas(t,666,10,!0)}},{"./as3/conversion-core":8,"./as3/matrix":9,"./as3/point-core":10,"./as3/vector-3d":12,"./janicek/canvas":19,"./janicek/core":20,"./janicek/html-color":22,lodash:1}],53:[function(t,e,r){"use strict";function i(t,e,r){var i=s(t.point.x,t.point.y,t.elevation),n=s(e.point.x,e.point.y,e.elevation),o=s(r.point.x,r.point.y,r.elevation),h=n.subtract(i).crossProduct(o.subtract(i));h.z<0&&h.scaleBy(-1),h.normalize();var l=.5+35*h.dotProduct(a);return 0>l&&(l=0),l>1&&(l=1),l}var n=t("lodash"),o=t("./janicek/html-color"),s=t("./as3/vector-3d"),a=s(-1,-1,0);r.colorWithSlope=function(t,e,r,s,a){var h=s.v0,l=s.v1;if(n.isNull(h)||n.isNull(l))return a.OCEAN;if(e.water)return t;null!==r&&e.water===r.water&&(t=o.interpolateColor(t,a[r.biome],.4));var u=o.interpolateColor(t,3355443,.7),c=o.interpolateColor(t,16777215,.3),d=i(e,h,l);return.5>d?o.interpolateColor(u,t,2*d):o.interpolateColor(t,c,2*d-1)}},{"./as3/vector-3d":12,"./janicek/html-color":22,lodash:1}],54:[function(t,e,r){"use strict";function i(t,e,r){for(var i=0;i<e.length;i++)t.lineTo(e[i].x,e[i].y),r&&r(i,e[i].x,e[i].y)}function n(t,e,r){for(var i=e.length-1;i>=0;i--)t.lineTo(e[i].x,e[i].y),r&&r(i,e[i].x,e[i].y)}var o=t("lodash"),s=t("./janicek/html-color"),a=t("./as3/conversion-core"),h=t("./janicek/core"),l=t("pixi.js"),u=t("./as3/point-core"),c=t("shape2d"),d=t("pixi-noise-filter");r.graphicsReset=function(t,e,r,i){t.stage=new l.Stage(i.OCEAN),t.root=new l.DisplayObjectContainer,t.stage.addChild(t.root),t.renderer.render(t.stage)},r.renderDebugPolygons=function(t,e,r){var i;0===e.centers.length&&(t.fillStyle="#dddddd",t.fillRect(0,0,h.toInt(e.SIZE.width),h.toInt(e.SIZE.height)),o(e.points).each(function(e){t.beginPath(),t.strokeStyle="#000000",t.fillStyle="#000000",t.arc(e.x,e.y,1.3,Math.PI,2*Math.PI,!1),t.closePath(),t.fill(),t.stroke()}));var n=new l.Graphics;o(e.centers).each(function(e){i=o.isNull(e.biome)?e.ocean?r.OCEAN:e.water?r.RIVER:16777215:r[e.biome],n.lineStyle(),n.beginFill(s.interpolateColor(i,14540253,.2)),o(e.borders).each(function(t){t.v0&&t.v1&&(n.moveTo(e.point.x,e.point.y),n.lineTo(t.v0.point.x,t.v0.point.y),n.lineTo(t.v1.point.x,t.v1.point.y),n.lineTo(e.point.x,e.point.y))}),n.endFill(),o(e.borders).each(function(t){t.v0&&t.v1&&(t.river>0?n.lineStyle(2,r.RIVER):n.lineStyle(1,0,.2),n.moveTo(t.v0.point.x,t.v0.point.y),n.lineTo(t.v1.point.x,t.v1.point.y))}),n.beginFill(e.water?13107:0,.7),n.drawCircle(e.point.x,e.point.y,1.3,1.3),n.endFill(),t.root.addChild(n),n=new l.Graphics}),o(e.centers).each(function(t){o(t.corners).each(function(t){n.beginFill(t.water?255:39168),n.drawRect(t.point.x-1,t.point.y-1,2,2),n.endFill()})}),t.root.addChild(n),t.renderer.render(t.stage)},r.renderWatersheds=function(t,e,r){var i,n,s,h=new l.Graphics;o(e.edges).each(function(t){t.d0&&t.d1&&t.v0&&t.v1&&!t.d0.ocean&&!t.d1.ocean&&(n=r.watersheds[t.d0.index],s=r.watersheds[t.d1.index],n!==s&&(h.lineStyle(3.5,0,.1*Math.sqrt((e.corners[n].watershedSize||1)+(e.corners[s].watershed.watershedSize||1))),h.moveTo(t.v0.point.x,t.v0.point.y),h.lineTo(t.v1.point.x,t.v1.point.y)))});for(i in e.edges)a.booleanFromInt(i.river)&&(h.lineStyle(1,6724095),h.moveTo(i.v0.point.x,i.v0.point.y),h.lineTo(i.v1.point.x,i.v1.point.y));t.root.addChild(h),t.renderer.render(t.stage)},r.renderPolygons=function(t,e,r,n,o,s){var a=new l.Graphics;a.drawRect(0,0,o.SIZE.width,o.SIZE.height),t.root.addChild(a),a=new l.Graphics;for(var u=function(t,e,r){var n=s.path0[v.index];t.moveTo(e,r),t.lineTo(n[0].x,n[0].y),i(t,n),t.lineTo(e,r)},c=function(t,e,r){var n=s.path1[v.index];t.moveTo(e,r),t.lineTo(n[0].x,n[0].y),i(t,n),t.lineTo(e,r)},d=0;d<o.centers.length;d++)for(var f=o.centers[d],p=0;p<f.neighbors.length;p++){var g=f.neighbors[p],v=o.lookupEdgeFromCenter(f,g),m=h.coalesce(e[f.biome],0);if(null!==n&&(m=n(m,f,g,v,e)),!h.isUndefinedOrNull(s.path0[v.index])&&!h.isUndefinedOrNull(s.path1[v.index]))if(h.isUndefinedOrNull(r))m!==e.OCEAN&&(a.beginFill(m),u(a,f.point.x,f.point.y),c(a,f.point.x,f.point.y),a.endFill());else{var x=v.v0,y=v.v1,b=v.midpoint,T=.5*(x[r]+y[r]);drawGradientTriangle(a,vector3d(f.point.x,f.point.y,f[r]),vector3d(x.point.x,x.point.y,x[r]),vector3d(b.x,b.y,T),[e.GRADIENT_LOW,e.GRADIENT_HIGH],u,f.point.x,f.point.y),drawGradientTriangle(a,vector3d(f.point.x,f.point.y,f[r]),vector3d(b.x,b.y,T),vector3d(y.point.x,y.point.y,y[r]),[e.GRADIENT_LOW,e.GRADIENT_HIGH],c,f.point.x,f.point.y)}}t.root.addChild(a),t.renderer.render(t.stage)},r.renderBridges=function(t,e,r,i){var n=new l.Graphics;o(e.edges).each(function(t){if(t.river>0&&t.river<4&&!t.d0.water&&!t.d1.water&&(t.d0.elevation>.05||t.d1.elevation>.05)){var e={x:-(t.v1.point.y-t.v0.point.y),y:t.v1.point.x-t.v0.point.x};u.normalize(e,.25+(o.isNull(r.road[t.index])?0:.5)+.75*Math.sqrt(t.river)),n.lineStyle(1.1,i.BRIDGE),n.moveTo(t.midpoint.x-e.x,t.midpoint.y-e.y),n.lineTo(t.midpoint.x+e.x,t.midpoint.y+e.y)}}),t.root.addChild(n),t.renderer.render(t.stage)},r.renderRoads=function(t,e,r,n){function s(t,e,r){var i={x:-(t.v1.point.y-t.v0.point.y),y:t.v1.point.x-t.v0.point.x},n=u.subtract(e,t.midpoint);return i.x*n.x+i.y*n.y<0&&(i.x=-i.x,i.y=-i.y),u.normalize(i,r),i}var a,d,f,p,g,v,m,x,y,b=new l.Graphics;o(e.centers).each(function(t){if(!h.isUndefinedOrNull(r.roadConnections[t.index]))if(2===r.roadConnections[t.index].length){for(y=t.borders,p=0;p<y.length;p++)if(m=y[p],r.road[m.index]>0)for(g=p+1;g<y.length;g++)if(x=y[g],r.road[x.index]>0){v=.5*Math.min(u.distanceFromOrigin(u.subtract(m.midpoint,t.point)),u.distanceFromOrigin(u.subtract(x.midpoint,t.point))),a=u.add(s(m,t.point,v),m.midpoint),d=u.add(s(x,t.point,v),x.midpoint),f=u.interpolate(a,d,.5),b.moveTo(m.midpoint.x,m.midpoint.y),b.lineStyle(1.1,n["ROAD"+r.road[m.index]]);var e=new c;e.steps=10,e.moveTo(m.midpoint.x,m.midpoint.y),e.quadraticCurveTo(a.x,a.y,f.x,f.y),e.moveTo(f.x,f.y),i(b,e.points);var l=e.points[e.points.length-1];e=new c,e.steps=10,e.moveTo(l.x,l.y),e.quadraticCurveTo(d.x,d.y,x.midpoint.x,x.midpoint.y),b.lineStyle(1.1,n["ROAD"+r.road[x.index]]),i(b,e.points)}}else o(t.borders).each(function(e){if(r.road[e.index]>0){v=.25*u.distanceFromOrigin(u.subtract(e.midpoint,t.point)),a=u.add(s(e,t.point,v),e.midpoint),b.moveTo(e.midpoint.x,e.midpoint.y),b.lineStyle(1.4,n["ROAD"+r.road[e.index]]);var o=new c;o.steps=10,o.moveTo(e.midpoint.x,e.midpoint.y),o.quadraticCurveTo(a.x,a.y,t.point.x,t.point.y),i(b,o.points)}})}),t.root.addChild(b),t.renderer.render(t.stage)},r.renderEdges=function(t,e,r,o,s,u){u=h.def(u,!0);for(var c,d=0;d<r.centers.length;d++)for(var f=r.centers[d],p=0;p<f.neighbors.length;p++){var g=f.neighbors[p];if(c=r.lookupEdgeFromCenter(f,g),!h.isUndefinedOrNull(o.path0[c.index])&&!h.isUndefinedOrNull(o.path1[c.index])){var v=0,m=0;if(f.ocean!==g.ocean)v=2,m=e.COAST;else if(a.intFromBoolean(f.water)>0!=a.intFromBoolean(g.water)>0&&"ICE"!==f.biome&&"ICE"!==g.biome)v=1,m=e.LAKESHORE;else{if(f.water||g.water)continue;if(s.lava[c.index])v=1,m=e.LAVA;else{if(!(c.river>0&&u))continue;v=Math.sqrt(c.river),m=e.RIVER}}var x=new l.Graphics,y=o.path0[c.index][0];x.moveTo(y.x,y.y),x.lineStyle(v,m),i(x,o.path0[c.index]),t.root.addChild(x),x=new l.Graphics,x.lineStyle(v,m),n(x,o.path1[c.index]),t.root.addChild(x)}}t.renderer.render(t.stage)},r.renderAllEdges=function(t,e,r,o,s){for(var a,u=0;u<o.centers.length;u++)for(var c=o.centers[u],d=0;d<c.neighbors.length;d++){var f=c.neighbors[d];if(a=o.lookupEdgeFromCenter(c,f),!(h.isUndefinedOrNull(s.path0[a.index])||h.isUndefinedOrNull(s.path1[a.index])||c.water)){var p=new l.Graphics;p.moveTo(s.path0[a.index][0].x,s.path0[a.index][0].y),p.lineStyle(5,e,r),i(p,s.path0[a.index]),t.root.addChild(p),p=new l.Graphics,p.lineStyle(5,e,r),n(p,s.path1[a.index]),t.root.addChild(p)
}}t.renderer.render(t.stage)},r.addNoise=function(t){var e=new d;e.noiseLevelRGBA=[.05,.05,.05,0],t.stage.filters=[e],t.renderer.render(t.stage)}},{"./as3/conversion-core":8,"./as3/point-core":10,"./janicek/core":20,"./janicek/html-color":22,lodash:1,"pixi-noise-filter":2,"pixi.js":3,shape2d:4}],55:[function(t,e){"use strict";var r=t("lodash"),i=t("./janicek/core");e.exports=function(){var t={};return t.road=[],t.roadConnections=[],t.createRoads=function(e,n){var o,s,a=[],h=[],l=[];for(r(e.centers).each(function(t){(t.coast||t.ocean)&&(l[t.index]=1,a.push(t))});a.length>0;){o=a.shift();for(var u=0;u<o.neighbors.length;u++){var c=o.neighbors[u];for(s=i.coalesce(l[o.index],0);c.elevation>n[s]&&!c.water;)s+=1;s<i.coalesce(l[c.index],999)&&(l[c.index]=s,a.push(c))}}r(e.centers).each(function(t){r(t.corners).each(function(e){h[e.index]=i.toInt(Math.min(i.coalesce(h[e.index],999),i.coalesce(l[t.index],999)))})}),r(e.centers).each(function(e){r(e.borders).each(function(n){r.isNull(n.v0)||r.isNull(n.v1)||h[n.v0.index]===h[n.v1.index]||(t.road[n.index]=i.toInt(Math.min(h[n.v0.index],h[n.v1.index])),i.isUndefinedOrNull(t.roadConnections[e.index])&&(t.roadConnections[e.index]=[]),t.roadConnections[e.index].push(n))})})},t}},{"./janicek/core":20,lodash:1}],56:[function(t,e,r){"use strict";r.displayColors={OCEAN:4473978,COAST:3355482,LAKESHORE:2250120,LAKE:3368601,RIVER:2250120,MARSH:3106406,ICE:10092543,BEACH:10522743,ROAD1:4465169,ROAD2:5583650,ROAD3:6702131,BRIDGE:6842464,LAVA:13382451,SNOW:16777215,TUNDRA:12303274,BARE:8947848,SCORCHED:5592405,TAIGA:10070647,SHRUBLAND:8952183,TEMPERATE_DESERT:13226651,TEMPERATE_RAIN_FOREST:4491349,TEMPERATE_DECIDUOUS_FOREST:6788185,GRASSLAND:8956501,SUBTROPICAL_DESERT:13810059,TROPICAL_RAIN_FOREST:3372885,TROPICAL_SEASONAL_FOREST:5609796},r.elevationGradientColors={OCEAN:34816,GRADIENT_LOW:34816,GRADIENT_HIGH:16776960}},{}],57:[function(t,e){"use strict";var r=t("lodash");e.exports=function(){var t={};return t.lowestCorner=[],t.watersheds=[],t.createWatersheds=function(e){var i;r(e.centers).each(function(e){i=null,r(e.corners).each(function(t){(null===i||t.elevation<i.elevation)&&(i=t)}),t.lowestCorner[e.index]=null===i?-1:i.index,t.watersheds[e.index]=null===i?-1:null===i.watershed?-1:i.watershed.index})},t}},{lodash:1}]},{},[13]);


//5000=r.width
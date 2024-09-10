package api

var TData = `
{
                            "clientBootstrap": {
                                "accountsStatus": null,
                                "authStatus": "logged_in",
                                "serviceStatus": {},
                                "session": {
                                    "accessToken": "%s",
                                    "user": {
                                        "email": "yuanbao@openoai.cn",
                                        "id": "o81vN6vl5jjE-96fNSGEW_DewM24",
                                        "image": null,
                                        "name": "user-GEW_DewM24",
                                        "picture": null
                                    }
                                },
                                "statsig": {
                                    "payload": {
                                        "feature_gates": {
                                            "458009956": {
                                                "name": "458009956",
                                                "value": true
                                            },
                                            "740954505": {
                                                "name": "740954505",
                                                "value": true
                                            }
                                        },
                                        "hash_used": "djb2",
                                        "layer_configs": {
                                            "2723963139": {
                                                "name": "2723963139",
                                                "value": {
                                                    "config": {
                                                        "impl": "rm_score",
                                                        "rm_gpt4_vs_sahara": "rm-model-switcher-1p-d36-0325",
                                                        "rm_renderer": "harmony_v4.0.13_8k_turbo_mm"
                                                    },
                                                    "is_AG8PqS2q_enabled": true,
                                                    "is_conversation_model_switching_allowed": true,
                                                    "is_dynamic_model_enabled": true,
                                                    "show_message_model_info": true,
                                                    "show_message_regenerate_model_selector": true,
                                                    "show_message_regenerate_model_selector_on_every_message": true,
                                                    "show_rate_limit_downgrade_banner": true
                                                }
                                            },
                                            "3048336830": {
                                                "name": "3048336830",
                                                "value": {
                                                    "is-enabled": true
                                                }
                                            }
                                        }
                                    },
                                    "user": {
                                        "userID": "user-fakeoai"
                                    }
                                },
                                "user": {
                                    "email": "yuanbao@openoai.cn",
                                    "id": "o81vN6vl5jjE-96fNSGEW_DewM24",
                                    "image": null,
                                    "name": "user-GEW_DewM24",
                                    "picture": null
                                }
                            },
                            "cspScriptNonce": "aab26913-317e-4628-945d-baa008dbf46f",
                            "dehydratedState": {
                                "mutations": [],
                                "queries": [{
                                    "queryHash": "[\"session\"]",
                                    "queryKey": ["session"],
                                    "state": {
                                        "data": {
                                            "accessToken": "%s",
                                            "user": {
                                                "email": "yuanbao@openoai.cn",
                                                "id": "o81vN6vl5jjE-96fNSGEW_DewM24",
                                                "image": null,
                                                "name": "user-GEW_DewM24",
                                                "picture": null
                                            }
                                        },
                                        "dataUpdateCount": 1,
                                        "dataUpdatedAt": 1725450210242,
                                        "error": null,
                                        "errorUpdateCount": 0,
                                        "errorUpdatedAt": 0,
                                        "fetchFailureCount": 0,
                                        "fetchFailureReason": null,
                                        "fetchMeta": null,
                                        "fetchStatus": "idle",
                                        "isInvalidated": false,
                                        "status": "success"
                                    }
                                }]
                            },
                            "isAndroidChrome": false,
                            "isElectron": false,
                            "isIos": false
                        }`

var GptsData = `{
                            "clientBootstrap": {
                                "accountsStatus": null,
                                "authStatus": "logged_in",
                                "serviceStatus": {},
                                "session": {
                                    "accessToken": "%s",
                                    "user": {
                                        "email": "yuanbao@openoai.cn",
                                        "id": "o81vN6vl5jjE-96fNSGEW_DewM24",
                                        "image": null,
                                        "name": "user-GEW_DewM24",
                                        "picture": null
                                    }
                                },
                                "statsig": {
                                    "payload": {
                                        "feature_gates": {
                                            "458009956": {
                                                "name": "458009956",
                                                "value": true
                                            },
                                            "740954505": {
                                                "name": "740954505",
                                                "value": true
                                            }
                                        },
                                        "hash_used": "djb2",
                                        "layer_configs": {
                                            "2723963139": {
                                                "name": "2723963139",
                                                "value": {
                                                    "config": {
                                                        "impl": "rm_score",
                                                        "rm_gpt4_vs_sahara": "rm-model-switcher-1p-d36-0325",
                                                        "rm_renderer": "harmony_v4.0.13_8k_turbo_mm"
                                                    },
                                                    "is_AG8PqS2q_enabled": true,
                                                    "is_conversation_model_switching_allowed": true,
                                                    "is_dynamic_model_enabled": true,
                                                    "show_message_model_info": true,
                                                    "show_message_regenerate_model_selector": true,
                                                    "show_message_regenerate_model_selector_on_every_message": true,
                                                    "show_rate_limit_downgrade_banner": true
                                                }
                                            },
                                            "3048336830": {
                                                "name": "3048336830",
                                                "value": {
                                                    "is-enabled": true
                                                }
                                            }
                                        }
                                    },
                                    "user": {
                                        "userID": "user-fakeoai"
                                    }
                                },
                                "user": {
                                    "email": "yuanbao@openoai.cn",
                                    "id": "o81vN6vl5jjE-96fNSGEW_DewM24",
                                    "image": null,
                                    "name": "user-GEW_DewM24",
                                    "picture": null
                                }
                            },
                            "dehydratedState": {
                                "mutations": [],
                                "queries": [{
                                    "queryHash": "[\"session\"]",
                                    "queryKey": ["session"],
                                    "state": {
                                        "data": {
                                            "accessToken": "%s",
                                            "user": {
                                                "email": "yuanbao@openoai.cn",
                                                "id": "o81vN6vl5jjE-96fNSGEW_DewM24",
                                                "image": null,
                                                "name": "user-GEW_DewM24",
                                                "picture": null
                                            }
                                        },
                                        "dataUpdateCount": 1,
                                        "dataUpdatedAt": 1725450210242,
                                        "error": null,
                                        "errorUpdateCount": 0,
                                        "errorUpdatedAt": 0,
                                        "fetchFailureCount": 0,
                                        "fetchFailureReason": null,
                                        "fetchMeta": null,
                                        "fetchStatus": "idle",
                                        "isInvalidated": false,
                                        "status": "success"
                                    }
                                }]
                            },
                            "gizmo": {
                                "files": [],
                                "gizmo": {
                                    "appeal_info": null,
                                    "author": {
                                        "display_name": "ChatGPT",
                                        "display_socials": [],
                                        "is_verified": true,
                                        "link_to": "https://openai.com",
                                        "selected_display": "name",
                                        "user_id": "user-u7SVk5APwT622QC7DPe41GHJ",
                                        "will_receive_support_emails": null
                                    },
                                    "created_at": "2023-11-05T23:56:43.549801+00:00",
                                    "current_user_permission": {
                                        "can_delete": false,
                                        "can_export": false,
                                        "can_read": true,
                                        "can_share": false,
                                        "can_view_config": false,
                                        "can_write": false
                                    },
                                    "display": {
                                        "categories": ["other"],
                                        "description": "Let me turn your imagination into imagery.",
                                        "name": "DALL\u00b7E",
                                        "profile_pic_id": "file-SxYQO0Fq1ZkPagkFtg67DRVb",
                                        "profile_picture_url": "https://chat.cdn.openoai.cn/file-SxYQO0Fq1ZkPagkFtg67DRVb?se=2123-10-12T23%3A57%3A32Z\u0026sp=r\u0026sv=2021-08-06\u0026sr=b\u0026rscc=max-age%3D31536000%2C%20immutable\u0026rscd=attachment%3B%20filename%3Dagent_3.webp\u0026sig=pLlQh8oUktqQzhM09SDDxn5aakqFuM2FAPptuA0mbqc%3D",
                                        "prompt_starters": []
                                    },
                                    "id": "g-2fkFE8rbu",
                                    "instructions": null,
                                    "last_interacted_at": "2024-09-05T06:00:04.308418+00:00",
                                    "live_version": null,
                                    "model": null,
                                    "num_interactions": 976,
                                    "organization_id": "org-OROoM5KiDq6bcfid37dQx4z4",
                                    "settings": null,
                                    "share_recipient": "link",
                                    "sharing": null,
                                    "sharing_targets": null,
                                    "short_url": "g-2fkFE8rbu-dall-e",
                                    "tags": ["unreviewable", "public", "first_party", "pinned"],
                                    "training_disabled": null,
                                    "updated_at": "2024-06-28T19:42:41.799038+00:00",
                                    "vanity_metrics": {
                                        "created_ago_str": null,
                                        "num_conversations": null,
                                        "num_conversations_str": null,
                                        "review_stats": null
                                    },
                                    "version": null,
                                    "voice": {
                                        "id": "ember"
                                    },
                                    "workspace_approval_date": null,
                                    "workspace_approved": null,
                                    "workspace_id": null
                                },
                                "product_features": {
                                    "attachments": {
                                        "accepted_mime_types": ["text/x-shellscript", "application/x-powershell", "message/rfc822", "application/vnd.apple.pages", "text/x-typescript", "text/x-makefile", "application/msword", "text/javascript", "text/x-c++", "text/x-c", "text/x-csharp", "text/markdown", "text/x-script.python", "text/html", "text/x-java", "text/x-diff", "text/xml", "application/pdf", "application/x-scala", "text/x-python", "application/vnd.apple.keynote", "text/x-php", "application/vnd.ms-powerpoint", "text/rtf", "text/x-lisp", "text/x-tex", "application/json", "application/x-sql", "text/calendar", "text/x-sh", "application/vnd.oasis.opendocument.text", "application/x-yaml", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/x-rst", "text/x-asm", "application/javascript", "text/x-ruby", "application/rtf", "text/css", "text/x-vcard", "application/x-rust", "text/plain", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "text/vbscript"],
                                        "can_accept_all_mime_types": true,
                                        "image_mime_types": ["image/webp", "image/jpeg", "image/gif", "image/png"],
                                        "type": "retrieval"
                                    }
                                },
                                "tools": [{
                                    "id": "gzm_cnf_KuQKBEnzFPMwdKIWYnOoetjx~gzm_tool_P9ZWt7cmybLejZWkNxDTEpIj",
                                    "metadata": null,
                                    "settings": null,
                                    "type": "dalle"
                                }]
                            },
                            "isAndroidChrome": false,
                            "isElectron": false,
                            "isIos": false,
                            "kind": "chat_page"
                        }`

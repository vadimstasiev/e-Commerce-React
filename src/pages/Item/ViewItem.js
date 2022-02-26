import Header from '../../Components/MainLayout/Header'
import Footer from '../../Components/MainLayout/Footer'
import React from 'react'
import NoiseBackground from '../../Components/NoiseBackground'
import Background from '../../Components/Background'
import FavouriteSidePanel from '../../Components/FavouriteSidePanel'
import ItemCard from './ItemCard'

const products = [
    {
        id: "JmXFzznwVAL2LTnQoG3D",
        postcode: "MK145PR",
        itemDescription: "the item doesn't include BBU and cables.the item in the picture is everything you will receive.\n\n\n\nLSI SAS 9212-4i4e Host Bus Adapter Specifications\n\nIO Controller\n\nLSI SAS2008/ Fusion MPT 2.0\n\nStorage Connectivity ; Data Transfer Rates\n\n8 ports, 6Gb/s SAS 2.0 Compliant\n\nSAS Bandwidth\n\nHalf Duplex\n\n600 MB/s per lane\n\nPort Configurations\n\n4 ea, x1 internal ports (individual drives)\n\n4 ea, x1 external ports\n\n1ea, x4 external wide port\n\nHost Bus\n\nx8 lane, PCI Express 2.0 compliant\n\nPCI Data Burst Transfer Rates\n\nHalf Duplex\n\nx8, PCIe, 4000 MB/s\n\nPhysical Dimensions\n\nLow Profile (2.6\" x 6.6\")\n\nConnectors\n\nFour x1 internal SATA , One x4 external mini-SAS (SFF8088)\n\nCable Support\n\nPassive Copper\n\nHost Bus Type\n\nx8 lane, PCI Express 2.0\n\nPCI Card Type\n\n3.3 V Add-in Card\n\nOperating Voltage\n\n+12V +/-8%; 3.3V +/-8%\n\nPCI Power (Nominal)\n\n9W typical (Airflow min 200 LFM)\n\nDevice Support\n\n256 Non-RAID SAS/SATA devices\n\nIntegrated RAID (IR)\n\nRAID 0\n\nRAID 1\n\nRAID 1E\n\nRAID 10\n\nEnvironmental\n\nOperating\n\n0oC to 55oC\n\n5 to 90% Non-condensing\n\n14 spread across 2 volumes\n\n10 per volume\n\n2 per volume plus hot spare\n\n10 per volume\n\n10 per volume\n\n \n\n \n\n\n",
        userUid: "lBthe3QFeFUBO6ToY54PONeS19j2",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/ce3582d2-8c1c-4c14-a942-6c30e2f90525-s-l1600%20(1).jpg?alt=media&token=d2f90648-5190-4ec3-a655-87f5652fb57d",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/16d4ead3-6888-4727-a14e-cc614d0065b2-s-l1600%20(2).jpg?alt=media&token=687aaa43-8ab9-4a36-a0dc-a4503f68f1d6",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/220d8ac9-3cc6-49d4-bd94-0c12b1153d08-s-l1600%20(3).jpg?alt=media&token=f720c0e1-af83-493d-8e1e-8af5cea2266e",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/aa29a828-1735-4bb5-902d-d915d779909b-s-l1600%20(4).jpg?alt=media&token=c7d272d3-29b0-4207-81d7-359e4558923f",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/d453ecc0-6148-4ff6-85fd-8bdd0b563ec1-s-l1600%20(5).jpg?alt=media&token=a33760c4-9566-4a5e-9599-db88aa3f9cd7",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/3968fbc5-1f28-46e9-9e25-768234604e1f-s-l1600%20(6).jpg?alt=media&token=f55945c6-5212-4c43-9ea1-74d0d6df87bd",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/f26f3a89-89e0-407b-80af-f676c831ee6f-s-l1600%20(7).jpg?alt=media&token=6d32f8ef-9d50-4e64-ae90-d80716cc414f",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/708bda92-6bf9-4202-b884-3c773239a8c8-s-l1600%20(8).jpg?alt=media&token=98ca16cb-bd3d-43a9-88a4-30be768291f7",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/7f7fece4-9d54-4ffb-a265-bf11ab216d37-s-l1600%20(11).jpg?alt=media&token=f6f67d13-0282-47be-8bd8-2e7544c89fd5",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/bc6094dc-a019-45c8-bdeb-15347f04bb4b-s-l1600.jpg?alt=media&token=666e21e0-8422-489d-baf1-6aaa8b80ae83"
        ],
        price: 23.88,
        name: "LSI SAS 9212-4i4e 6Gb SAS Controller Card HBA Card Internal External IT Mode"
    },
    {
        id: "Le9kFFw52SIQKRisUTwD",
        price: 134.55,
        userUid: "lBthe3QFeFUBO6ToY54PONeS19j2",
        itemDescription: "NAS Thecus N2800, OS 7.0, Intel 2.13GHz, 4GB RAM, 2x 2TB HDD, USB 3.0\n\n\nIn Good Condition and Working Order.\nWith the normal signs of wear and slight scratches on the exterior of the case.\nWithout accessories and without the original box.\n\n\nThe machine comes with the 7.0 version of the operating system and cannot be upgraded through the usual upgrade procedure as devised by Thecus.\nI can also install in its place the 5.0 version of the operating system, 32/64 bit for which the upgrade can be done in the usual fashion.\n\n\nhttp://www.thecus.com/product.php?PROD_ID=66",
        postcode: "MK18 2GE",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/eafae6d7-ec62-48c2-aae0-7ade2e996d6e-s-l1600%20(1).jpg?alt=media&token=d81bcd4b-b3e0-4ab9-8e46-9fc0acfb6649",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/d6d86b53-b3b2-4166-a4f0-b3e212da15fa-s-l1600%20(2).jpg?alt=media&token=82803b64-d719-413c-99d1-a3dbc44e6ec5",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/a96e7a24-17b3-4d17-afa7-f25bf7e85357-s-l1600%20(3).jpg?alt=media&token=8daa3129-07ef-44da-83c3-b295041d1bc7",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/38c8a12a-e94d-4add-879a-b369b97b6fa1-s-l1600%20(4).jpg?alt=media&token=cf3f91ad-b7f1-44ff-a836-c14f9e6788d0",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/5292e011-41e2-40d0-b366-326117af95b8-s-l1600%20(5).jpg?alt=media&token=4558aa8c-99af-412e-b91d-8d85f5ff49b4",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/c27de886-5138-4cbb-89a1-d4650887effc-s-l1600%20(6).jpg?alt=media&token=8ccdd379-9994-4245-b781-49a6cf41f1d9",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/00cb143f-4c0f-4a85-b17b-3362941fe86b-s-l1600%20(7).jpg?alt=media&token=d1af127a-fc45-4604-b000-9c205f21ac6c",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/16267a47-14fc-4801-82b9-8e0d1334fa3c-s-l1600%20(8).jpg?alt=media&token=e92ed112-79c8-40f3-abea-21ec3e742127",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/1141708c-283c-49ac-b886-d0077817fb07-s-l1600%20(9).jpg?alt=media&token=d42ba28e-c0b5-4cf8-bf7d-853d4bc49328",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/fca25f57-b744-42a9-b9a1-51526dcecc35-s-l1600%20(10).jpg?alt=media&token=c78a0102-b5d9-4d63-ac08-3db2727076c9",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/d19911c0-2fba-4805-a553-919783c1b58c-s-l1600.jpg?alt=media&token=584eabcb-98f4-4ae2-8fad-a4e1d06c3ff8"
        ],
        name: "NAS Thecus N2800, OS 7.0, Intel 2.13GHz, 4GB RAM, 2x 2TB HDD, USB 3.0"
    },
    {
        id: "LxbWyDSB2nosmMR3gXFD",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/e1ff72eb-246e-465e-8935-b5a43a3e36d9-s-l1600%20(1).jpg?alt=media&token=51f7638c-5be7-4492-993e-1b34df3ad8c4",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/4f088620-d450-4498-b942-cd7f7b537917-s-l1600%20(2).jpg?alt=media&token=cafd0073-9618-4671-8cc0-d9993a6506fc",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/df27aea2-e413-4446-99fa-3d652601ec5e-s-l1600%20(3).jpg?alt=media&token=d7d0cc99-66cc-43cc-bd11-203e1119be9d",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/50750251-669f-443b-939e-8f19e14f9c3f-s-l1600%20(4).jpg?alt=media&token=e8c2124a-2e24-4852-8731-928a6995584e",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/be2a816c-7f95-4ffa-aa85-0ba9b41f989e-s-l1600%20(5).jpg?alt=media&token=f9dd650a-521d-4ab4-8fe3-f13aebe6098b",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/0987ecf5-901b-4e6e-8f89-f070c81f0bd4-s-l1600%20(6).jpg?alt=media&token=dd1f0788-92b3-4804-8e1c-a0b25d27c1a2",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/e888c1d0-23b1-4f64-80ec-26d8d937b109-s-l1600%20(7).jpg?alt=media&token=9af2a849-df3a-428f-afb0-a691deeb7ba0",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/a4b3bacf-cda6-45d7-b419-6a4fba9bcc01-s-l1600%20(8).jpg?alt=media&token=0d593567-a9d2-4954-849b-9dfcc6936f5e",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/a87a166c-b25b-4724-8e37-82c42da8ce0f-s-l1600%20(11).jpg?alt=media&token=f5cfc705-88b6-4cfb-a3fe-48efa124d153",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/4f32fe67-2282-4cdd-92a6-69ef2c6d60b7-s-l1600.jpg?alt=media&token=98ae4320-63a7-4346-a6fa-75aed7c8e60c"
        ],
        price: 49.5,
        itemDescription: "HP STORAGE CONTROLLER LSI 9217-4i4e SAS 6Gb/s RAID CARD 725504-001 792099-001",
        postcode: "MK130EP",
        name: "HP STORAGE CONTROLLER LSI 9217-4i4e SAS 6Gb/s RAID CARD 725504-001 792099-001",
        userUid: "lBthe3QFeFUBO6ToY54PONeS19j2"
    },
    {
        id: "PI3MwMEFQoQrfUqrbZgK",
        userUid: "UWWjJYA66sfDQFHAUQpG4azRwNk2",
        itemDescription: "Package dimensions:\n22cm*16cm*19cm (length*width*height)\n\nThe size of this hard drive cage is approximately 3 times the size of the 5.25\" CD-ROM slot.\nFunction: It can accommodate 4 3.5\" hard disks, allowing you to easily expand 4 hard disks!\n\nIt is suitable for flat PC Cases with CD-ROM Slot InWall, or bracket-mounted CD-ROM Slots. Some special designs of PC Cases may not support this hard drive shelf. Then you can only DIY your PC Case or use it externally, please Please pay attention before buying!\n\nThe package includes:\nHDD hard drive cage with 4 3.5-inch bays.\n4x 3.5\" HDD mounting bracket tray with screws.\n\nPlease pay attention to the size of the cage and make sure there is enough space in your PC case. The product can also be placed outside the chassis to facilitate heat dissipation.",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/666f16bb-b1f5-4902-8e98-45ab692a3cc5-s-l1600%20(1).jpg?alt=media&token=1d08b480-8439-47fa-a033-6c131e26642c",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/beae4bcd-ead2-401c-b06d-36ac8500f691-s-l1600%20(2).jpg?alt=media&token=01a9d8b7-ad78-4b0a-81a5-fabe032855f2",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/1fc88432-67a1-49a4-b46a-1f76a69d4240-s-l1600%20(3).jpg?alt=media&token=1dce0711-9dde-4d08-8028-0c3e7830016f",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/0969fa51-cc31-46e4-a400-424d6bac7bcd-s-l1600%20(4).jpg?alt=media&token=8c35e42a-6572-468d-b4f4-39b6bbe614b6",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/ab262116-bc56-4e2b-b224-a8d4969915e6-s-l1600.jpg?alt=media&token=94bb5cbd-6c89-418f-8970-a86bcb5b50fe"
        ],
        price: 18.4,
        name: "5.25\" 4x 3.5\" HDD SATA SSD HDD Cage Hard Drive Caddy Bracket Adapter A4K3",
        postcode: "lu11dn"
    },
    {
        id: "TywKwcyyFckZItZ80MFQ",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/80dcca05-7bcc-4e7a-aad5-619817259638-s-l1600%20(1).jpg?alt=media&token=a2e4bb8b-ee34-47dc-9e24-82495240117b",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/50b59f9d-89f8-49ce-af40-fa4b52d51133-s-l1600%20(2).jpg?alt=media&token=921e7ba0-e6d9-405f-aa8e-c1b9094801c8",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/c15bc777-7999-4092-ba28-cd74ac4745fc-s-l1600%20(3).jpg?alt=media&token=55872bb5-980f-4c6a-9e22-d123f6cc8621",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/38b87da3-14ea-4fd9-a8ba-6c7ce80edff3-s-l1600%20(4).jpg?alt=media&token=8c319fe6-2b81-4e56-ad10-39a83d617735",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/770bb868-5536-46ef-9a75-220457fcfe9c-s-l1600%20(5).jpg?alt=media&token=b58f41a3-dbab-43ad-9b65-01bb2abe7fd5",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/02bb14de-cb9f-4628-879b-46409eea3de7-s-l1600.jpg?alt=media&token=026bdad5-6f17-4eda-8d8f-3efdb123f605"
        ],
        postcode: "LU1 1AA",
        name: "PCI SATA Adapter 4 Port PCI to SATA Controller Expansion Card for Bitcoin Mining",
        itemDescription: "PCI SATA Adapter 4 Port PCI to SATA Controller Expansion Card for Bitcoin Mining\nFeatures: 100% brand new and high quality\nAdd four independent SATA ports to your PCI equipped computer and enjoy the benefits of the optional software RAID configuration for added speed and/or data security with this adapter card.（Note it is PCI card,NOT PCIE card ).\nPlug the SATA RAID PCI card into the PCI slot on your motherboard, and connect SATA devices to the ports on the PCI card using the standard SATA cables of adequate length.\nThe card comes with an optional RAID utility which lets you configure a RAID 0 RAID 1 or RAID 0+1 setup on two or more of the SATA ports.\nYou can have one RAID 0 or 1 setup and two independent SATA drives two RAID 0 or 1 sets or a single RAID 0+1 set.\nSIL3114 chipset and supports mode: 32-bit 33/66 MHZ.\n\nSpecification: Stable and reliant Silicon Chipset SIL3114\nPCI specification revision 2.3 compliant w/ 32-bit 33/66Mhz host interface\nSerial ATA specification revision 1.0 compliant\nData transfer rate up to 150MB/s. (1.5Gbps)\nConnect up to 4 SATA drives\nPlug & Play connection\nSoftware application included\nRaid Function: Integrated SATA Transport, Link logic, and PHY layer\nSupports 4 Independent Serial ATA channels\nSupports RAID 0, 1, 5, 0+1, JBOD12\nSupports 256-byte transmit and receive FIFOs\nSupports programmable and EEPROM, FLASH & EPROM loadable PCI class mode\nSupports ATAPI devices: CD-ROM, DVD-ROM, etc\n48-Bit sector addressing Virtual DMA\n\nPackage Includes: 1PC x PCI to 4 SATA Raid Card",
        price: 13.94,
        userUid: "UWWjJYA66sfDQFHAUQpG4azRwNk2"
    },
    {
        id: "UgbhCR5sf9PKTB8Rta9s",
        postcode: "HP23 4QF",
        name: "WESTERN DIGITAL GOLD 2TB 7.2K 3.5 SATA WD2005FBYZ",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/9f2561e3-91e1-4b5e-9a32-6364e1f31056-s-l1600.jpg?alt=media&token=fc0f3f64-fd00-4cb7-80d3-0f546f2e6ac9"
        ],
        price: 39.16,
        userUid: "UWWjJYA66sfDQFHAUQpG4azRwNk2",
        itemDescription: "WESTERN DIGITAL GOLD 2TB 7.2K 3.5\" SATA WD2005FBYZ  \nAll of our items are professionally tested and in excellent working condition. DOA warranty, Money Back guaranteed. Please message us PRIOR to buying if you have any questions.\n\n\n\n\n\n\n\n#78 4/26/21 "
    },
    {
        id: "apGHGiLXUolybZRfW59d",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/b5995e7a-5263-40f0-a7b2-2f2562dd299d-s-l1600%20(1).jpg?alt=media&token=c6345d87-676b-4a39-a5a4-6b298d707755",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/d07181a3-6a0c-4015-8b51-289d6fd6438e-s-l1600%20(2).jpg?alt=media&token=88d9e429-03c7-401d-ba1f-2c1a25f88fa9",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/5087d688-fdf0-4665-a1ae-1e63c3cec09b-s-l1600%20(3).jpg?alt=media&token=e911f4c8-70cf-4b8e-bb5e-a9baa0a38658",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/3c663b50-1e85-4ea4-af46-73ac5e9ddfa5-s-l1600%20(4).jpg?alt=media&token=126d8e78-10ed-484e-b377-dbd1462703d7",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/b93ba4bc-87f8-4dd6-a11c-4d4a60793551-s-l1600%20(5).jpg?alt=media&token=86333ab6-b12f-4738-bf79-48892777d601",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/71818d14-e708-4055-a77c-33cfc5128f92-s-l1600%20(6).jpg?alt=media&token=9f5fc56f-16c1-4523-ae41-f9bdfc9db37d",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/00172d16-b111-4935-aade-7bd77e5f9092-s-l1600%20(7).jpg?alt=media&token=3fc9e8f7-f229-488b-a310-acb1cbff76fb",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/9304c96a-3a33-4465-a668-9b2993410cce-s-l1600%20(8).jpg?alt=media&token=bfb9fa3e-12eb-41b0-8c52-99388936acf9",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/f41d5f38-30cc-4891-bb3a-5bf562472102-s-l1600.jpg?alt=media&token=eb1fe7f1-936f-464f-9700-3ecd8f52daae"
        ],
        name: "Thermaltake Core V21 Usb3.0 Micro-atx Side Window Mesh Stackable Case Black",
        itemDescription: "Thermaltake Core V21 Usb3.0 Micro-atx Side Window Mesh Stackable Case Black",
        userUid: "UWWjJYA66sfDQFHAUQpG4azRwNk2",
        postcode: "lu11nx",
        price: 60.48
    },
    {
        id: "bnkI1kr1w3hOwvWDvZ0O",
        price: 40,
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/f96d8950-52ec-4d5c-98f8-fd69858388e0-s-l1600.jpg?alt=media&token=c3b4be42-508f-48db-8b10-025324d7c924"
        ],
        postcode: "mk1 1rd",
        itemDescription: "Corsair Vengeance LPX 2x8GB DDR4 DRAM 3000Mhz Memory Kit. Perfect working order",
        userUid: "lBthe3QFeFUBO6ToY54PONeS19j2",
        name: "Corsair Vengeance LPX 2x8GB DDR4 DRAM 3000Mhz Memory Kit"
    },
    {
        id: "edqipw4aflGZHCz4lcmh",
        postcode: "MK437QL",
        price: 500,
        itemDescription: "The card is in practically perfect condition. Only had very light and occasional use in house with no pets and no smoking. Virtually no dust on heat sink fins or fans, see pics. It will be very well packed, see my 100% seller feedback.",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/a6751ca3-5499-4aa7-8e21-b70984da8406-s-l1600%20(1).jpg?alt=media&token=8eaf3027-e957-4af6-9d30-5f45bffedf60",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/6ef36ced-1098-4866-a9bf-ef42ea3e8255-s-l1600%20(2).jpg?alt=media&token=6d6c8dbf-ce3c-4411-aa1a-9e7dccc1bd9d",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/cb2f97e7-cdf0-4e50-bcd7-070481d237e2-s-l1600%20(3).jpg?alt=media&token=3a6ca773-1b64-423a-8afd-12dd25657097",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/af01acd2-4e5b-4a4c-a8c0-e884519930fe-s-l1600%20(4).jpg?alt=media&token=a6d19f6d-ec9d-4573-8145-b1d9aade16e9",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/3db5b569-657a-43f5-b97d-0b57ab02b623-s-l1600%20(5).jpg?alt=media&token=63bfb8a0-d5f9-4c58-918d-9289935311ab",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/b051faa9-3d40-4c06-88dc-0eb3cc5ddcaf-s-l1600%20(6).jpg?alt=media&token=ea272e97-cbaf-4c18-a4f5-2433859c200b",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/a77e916e-1bc2-441d-8867-5cce48bd3909-s-l1600%20(7).jpg?alt=media&token=390cc5a5-8f6e-408e-91c2-9880f279b8b6",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/6863ace5-2b5a-4a7c-9c01-1349d4e61283-s-l1600%20(8).jpg?alt=media&token=4a723ecc-c614-45b1-9c8a-3757120c894d",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/69930ff3-f7a3-42f3-b19f-dffe8e1b1201-s-l1600.jpg?alt=media&token=2f38fbc3-e652-4c29-b97d-c33d662c651a",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/5c8657fa-d13f-4adb-8562-b209b8681b3e-s-l1600.png?alt=media&token=b5dc77f0-58f6-443b-a2c9-d7ee36c3e7a2"
        ],
        userUid: "lBthe3QFeFUBO6ToY54PONeS19j2",
        name: "GIGABYTE AORUS GeForce GTX 1080 TI Xtreme Edition 11G Graphic Card"
    },
    {
        id: "gqwSr92vHIw6athLgZpm",
        itemDescription: "Corsair Vengeance LPX 16GB (2 x 8GB) PC4-24000 (DDR4-3000).",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/8f4dff9e-8128-4493-b82a-9f11cd4067e2-s-l1600%20(6).jpg?alt=media&token=2182a355-86f2-4c6c-850b-bac8b394c3bb",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/929b662e-210a-473b-ac26-c6cba3760229-s-l1600.jpg?alt=media&token=0ac17043-000c-4b76-9139-44c6243a7491"
        ],
        postcode: "LU1 1de",
        name: "Corsair Vengeance LPX 16GB (2 x 8GB) PC4-24000 (DDR4-3000) ",
        price: 41.53,
        userUid: "UWWjJYA66sfDQFHAUQpG4azRwNk2"
    },
    {
        id: "koofcl6LMKUIoZoI19i0",
        name: "Asus prime A320M-CR2.0 Motherboard ✅Next Day Delivery 🚚Trusted Seller",
        price: 20,
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/8716ed1e-2627-4ce9-b200-f24081ff0d12-s-l1600%20(1).jpg?alt=media&token=dc5b3a6f-5d78-4458-aac0-fe0337aca040",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/dde3d63f-3586-46be-9d38-e15709a6ef5e-s-l1600%20(2).jpg?alt=media&token=f26906f3-289c-4d4a-96ba-579dc53e1d4a",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/6305c232-9f97-41db-bda3-b130d9c45f9a-s-l1600%20(3).jpg?alt=media&token=b81fbae2-c1ad-4f1e-ba41-c44bc5c1c3be",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/cb76ff4a-60bf-4056-80ca-42bd5965fc9a-s-l1600%20(9).jpg?alt=media&token=68fef8fc-21f7-4060-8baa-1d1d2ae139e7",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/15f996aa-4942-4b5e-865d-aeb410900cb8-s-l1600.jpg?alt=media&token=8d5637f9-46c8-4be0-a4b8-24778cb94c00"
        ],
        postcode: "mk11dx",
        itemDescription: "Asus prime A320M-CR2.0 Motherboard | Brand new. Condition is \"New\". Dispatched with eBay delivery – Packlink 2-3 days. \n\n\nSerial number recorded \n\n\nPlease message me any questions",
        userUid: "UWWjJYA66sfDQFHAUQpG4azRwNk2"
    },
    {
        id: "yB6CX5en7yiKFZ1Y5QGn",
        imagesUploadedUrl: [
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/e60e3562-d884-4cde-a92c-0fee12441376-s-l50.jpg?alt=media&token=aa04af2c-fd6b-46b5-a2b5-cfa5579b7ca0",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/5d1c19c9-a19b-4fe5-a120-bb3a4bd52c07-s-l500%20(1).jpg?alt=media&token=d1fceab4-3a64-4306-a063-da9c0cf0c0e5",
            "https://firebasestorage.googleapis.com/v0/b/mobile-app-b6ebc.appspot.com/o/ceb3732f-91ec-4f17-970f-c91e53584cd2-s-l500.jpg?alt=media&token=562d4042-a362-4253-9088-cd3206269876"
        ],
        name: "Kolink SATELLITE Micro-ATX Cube Case - Black - Components Computer Cases",
        postcode: "mk1 1dy",
        userUid: "lBthe3QFeFUBO6ToY54PONeS19j2",
        price: 38.63,
        itemDescription: "2 x USB3.0 on the front panel\nSupport for Micro-ATX Motherboards\nSupport for 280mm VGA cards\nSmall footprint:mATX board support up to 266mm x 180mm\nSpace for 2 x 3.5\" + 2 x 2.5\" or 3 x 3.5\" or 4 x 2.5\" HDD's\nKolink Satellite MicroATX Cube Case Black SATELLITE Components Computer Cases"
    }
]

const ViewItem = () => {
  return ( 
    <div>
        <NoiseBackground>
        <Background className={"dark:bg-transparent min-h-screen"}>
        <Header/>
        
            <div className="py-8">
                {/* <FavouriteSidePanel/> */}
                <main className="my-8">
                    <div className="container mx-auto px-6">
                        <div className="md:flex md:items-center">
                            <div className="w-full h-64 md:w-1/2 lg:h-96">
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Nike Air"/>
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="text-gray-600 dark:text-zinc-100 uppercase text-lg">Nike Air</h3>
                                <span className="text-gray-600 dark:text-zinc-200 mt-3">$125</span>
                                <hr className="my-3"/>
                                <div className="mt-2">
                                    <label className="text-gray-600 dark:text-zinc-100 text-sm">Description</label>
                                    <div className="flex items-center mt-1">
                                        
                                    <span className="text-gray-600 dark:text-zinc-200 text-lg mx-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span>
                                        
                                    </div>
                                </div>
                                <div className="flex items-center mt-6">
                                    <button className="px-8 py-[11px] bg-zinc-600 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-400 text-white text-sm font-medium rounded focus:outline-none">Message Now</button>
                                    <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-500 focus:outline-none">
                                    <svg className="fill-current h-6 w-6 text-zinc-800 dark:text-zinc-100 dark:hover:text-white float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-gray-600 dark:text-zinc-200 text-2xl font-medium">More Products from this Seller</h3>
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                {
                                    products.map(product => {
                                        const maxList = 4
                                        return (
                                            <ItemCard key={product.id} product={product}/>
                                        )
                                    })
                                }
                                
                                
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </Background>
        </NoiseBackground>
    </div>
  )
}

export default ViewItem
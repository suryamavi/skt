// A self-contained JavaScript module to show a result notification modal.

(function() {
    // १. Modal को HTML संरचना एउटा string को रूपमा बनाउने
    const modalHTML = `
        <div id="result-modal" class="modal">
          <div class="modal-content">
            <span class="close-button">×</span>
            <h2>नतिजा प्रकाशन सूचना</h2>
            <p>शैक्षिक सत्र २०८१ को कक्षा ११ को नतिजा प्रकाशन भएको छ।</p>
            <p>आफ्नो सिम्बोल नं. टाइप गरेर ग्रेडसिटसहितको नतिजा हेर्न तलको लिङ्कमा क्लिक गर्नुहोस्।</p>
            <a href="result/11.html" class="result-link">नतिजा हेर्न यहाँ क्लिक गर्नुहोस्</a>
          </div>
        </div>
    `;

    // २. Modal को लागि CSS स्टाइलहरू string को रूपमा बनाउने
    const modalCSS = `
        .modal {
          display: block; /* यो JS बाटै देखाइने हुनाले block राख्ने */
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.6);
        }
        .modal-content {
          background-color: #fefefe;
          margin: 15% auto;
          padding: 25px;
          border: 1px solid #888;
          width: 80%;
          max-width: 500px;
          text-align: center;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          position: relative;
          animation: flash 1.5s infinite;
        }
        @keyframes flash {
          0% { box-shadow: 0 5px 15px rgba(0,0,0,0.3), 0 0 0 0px rgba(255, 215, 0, 0.7); }
          50% { box-shadow: 0 5px 15px rgba(0,0,0,0.3), 0 0 0 10px rgba(255, 215, 0, 0); }
          100% { box-shadow: 0 5px 15px rgba(0,0,0,0.3), 0 0 0 0px rgba(255, 215, 0, 0.7); }
        }
        .modal-content h2 { color: #333; margin-top: 0; }
        .modal-content p { font-size: 16px; line-height: 1.5; }
        .result-link {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            font-size: 18px;
            margin-top: 15px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .result-link:hover { background-color: #45a049; }
        .close-button {
          color: #aaa;
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }
        .close-button:hover, .close-button:focus { color: black; }
    `;

    // ३. बनाएको HTML र CSS लाई पेजमा थप्ने
    // DOM तयार भएपछि मात्र कोड चलाउने
    document.addEventListener('DOMContentLoaded', function() {
        // CSS लाई <head> मा थप्ने
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = modalCSS;
        document.head.appendChild(styleSheet);

        // HTML लाई <body> को अन्त्यमा थप्ने
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // ४. Modal देखाउने र बन्द गर्ने Logic थप्ने
        const modal = document.getElementById('result-modal');
        const closeBtn = modal.querySelector('.close-button');

        // Close बटन क्लिक गर्दा Modal बन्द गर्ने
        closeBtn.onclick = function() {
          modal.style.display = 'none';
        };

        // Modal बाहिर (background मा) क्लिक गर्दा पनि Modal बन्द गर्ने
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = 'none';
          }
        };
    });

})(); // यो function लाई तुरुन्तै चलाउने
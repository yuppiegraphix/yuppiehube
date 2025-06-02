         function updateBundles() {
            let network = document.getElementById("network").value;
            let bundleSelect = document.getElementById("bundle");
            
            bundleSelect.innerHTML = ""; // Clear previous options

            if (network === "MTN") {
                bundleSelect.innerHTML += '<option value="7GHS - 1GB">7GHS - 1GB</option>';
                bundleSelect.innerHTML += '<option value="13GHS - 2GB">13GHS - 2GB</option>';
                bundleSelect.innerHTML += '<option value="17GHS - 3GB">17GHS - 3GB</option>';
                bundleSelect.innerHTML += '<option value=" 22GHS - 4GB">22GHS - 4GB</option>';
				bundleSelect.innerHTML += '<option value="28GHS - 5GB">28GHS - 5GB</option>';
				bundleSelect.innerHTML += '<option value="34GHS - 6GB">34GHS - 6GB</option>';
				bundleSelect.innerHTML += '<option value="38GHS - 8GB">38GHS - 8GB</option>';
				bundleSelect.innerHTML += '<option value="48GHS- 10GB">48GHS - 10GB</option>';
				bundleSelect.innerHTML += '<option value="75GHS - 15GB">75GHS - 15GB</option>';
				bundleSelect.innerHTML += '<option value="95GHS - 20GB">95GHS - 20GB</option>';
				bundleSelect.innerHTML += '<option value="115GHS - 25GB">115GHS - 25GB</option>';
				bundleSelect.innerHTML += '<option value="135GHS - 30GB">135GHS - 30GB</option>';
				bundleSelect.innerHTML += '<option value="210GHS- 40GB">210GHS- - 40GB</option>';
				bundleSelect.innerHTML += '<option value="260GHS - 50GB">260GHS - 50GB</option>';
				bundleSelect.innerHTML += '<option value="450GHS- 100GB">450GHS - 100GB</option>';
            } else if (network === "AirtelTigo") {
  bundleSelect.innerHTML += '<option value="7GHS - 1GB">7GHS - 1GB</option>';
                bundleSelect.innerHTML += '<option value="13GHS - 2GB">13GHS - 2GB</option>';
                bundleSelect.innerHTML += '<option value="16GHS - 3GB">16GHS - 3GB</option>';
                bundleSelect.innerHTML += '<option value=" 20GHS - 4GB">20GHS - 4GB</option>';
				bundleSelect.innerHTML += '<option value="28GHS - 5GB">28GHS - 5GB</option>';
				bundleSelect.innerHTML += '<option value="32GHS - 6GB">32GHS - 6GB</option>';
				bundleSelect.innerHTML += '<option value="40GHS - 8GB">40GHS - 8GB</option>';
				bundleSelect.innerHTML += '<option value="48GHS- 10GB">48GHS - 10GB</option>';
				bundleSelect.innerHTML += '<option value="70GHS - 15GB">70GHS - 15GB</option>';
				bundleSelect.innerHTML += '<option value="85GHS - 20GB">85GHS - 20GB</option>';
				bundleSelect.innerHTML += '<option value="110GHS - 25GB">110GHS - 25GB</option>';
				bundleSelect.innerHTML += '<option value="130GHS - 30GB">130GHS - 30GB</option>';
				bundleSelect.innerHTML += '<option value="185GHS- 40GB">185GHS- - 40GB</option>';
				bundleSelect.innerHTML += '<option value="230GHS - 50GB">230GHS - 50GB</option>';
				bundleSelect.innerHTML += '<option value="400GHS- 100GB">400GHS - 100GB</option>';
            }
        }
        function payWithPaystack() {
            let name = document.getElementById("name").value;
            let network = document.getElementById("network").value;
            let bundle = document.getElementById("bundle").value;
            let phone = document.getElementById("phone").value;
            let amount = parseInt(bundle) * 100; // Convert price to kobo (smallest Paystack unit)

            let handler = PaystackPop.setup({
                key: 'pk_test_6fb96cbcad6cc222a028172f9706eb71a6f7482d', // Replace with your Paystack public key
                email: 'customer@example.com', // You can collect email from the form
                amount: amount,
                currency: 'GHS',
                metadata: {
                    custom_fields: [
                        {
                            display_name: "Customer Name",
                            variable_name: "customer_name",
                            value: name
                        },
                        {
                            display_name: "Phone Number",
                            variable_name: "customer_phone",
                            value: phone
                        },
                        {
                            display_name: "Network",
                            variable_name: "customer_network",
                            value: network
                        }
                    ]
                },
                callback: function(response) {
                    alert('Payment successful! Transaction reference: ' + response.reference);
                    // Here, you can send payment details to your backend to process the bundle purchase
                },
                onClose: function() {
                    alert('Transaction was not completed.');
                }
            });

            handler.openIframe();
        }
 80/tcp   
 443/tcp   
 enable
 status
<php
 ($_SERVER["REQUEST_METHOD"] == "POST") 
    $name = $_POST['name'];
    $network = $_POST['network'];
    $amount = $_POST['amount'];
    $phone = $_POST['phone'];
    
    $to = "yuppiegee090@gmail.com";  // Replace with your email
    $subject = "New Bundle Order";
    $message = "Order Details:\n\nName: $name\nNetwork: $network\nAmount: $amount GHS\nPhone Number: $phone";
    $headers = "From: noreply@yourdomain.com"; 
    
    if (mail($to, $subject, $message, $headers)) {
        "Order sent successfully!";
    } else {
         "Error sending order.";
    }


npm  -g -tools

